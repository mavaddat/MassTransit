namespace MassTransit
{
    using System;
    using Configuration;
    using DependencyInjection;
    using Microsoft.Extensions.DependencyInjection;


    public static class DependencyInjectionReceiveEndpointExtensions
    {
        /// <summary>
        /// Registers a consumer given the lifetime scope specified
        /// </summary>
        /// <typeparam name="T">The consumer type</typeparam>
        /// <param name="configurator">The service bus configurator</param>
        /// <param name="context">The LifetimeScope of the provider</param>
        /// <param name="configure"></param>
        /// <returns></returns>
        public static void Consumer<T>(this IReceiveEndpointConfigurator configurator, IRegistrationContext context,
            Action<IConsumerConfigurator<T>> configure = null)
            where T : class, IConsumer
        {
            IConsumeScopeProvider scopeProvider = new ConsumeScopeProvider(context);

            var consumerFactory = new ScopeConsumerFactory<T>(scopeProvider);

            configurator.Consumer(consumerFactory, configure);
        }

        /// <summary>
        /// Registers a consumer given the lifetime scope specified
        /// </summary>
        /// <typeparam name="T">The consumer type</typeparam>
        /// <param name="configurator">The service bus configurator</param>
        /// <param name="provider">The LifetimeScope of the provider</param>
        /// <param name="configure"></param>
        /// <returns></returns>
        [Obsolete("Use the IRegistrationContext overload instead. Visit https://masstransit.io/obsolete for details.")]
        public static void Consumer<T>(this IReceiveEndpointConfigurator configurator, IServiceProvider provider,
            Action<IConsumerConfigurator<T>> configure = null)
            where T : class, IConsumer
        {
            IConsumeScopeProvider scopeProvider = new ConsumeScopeProvider(provider, LegacySetScopedConsumeContext.Instance);

            var consumerFactory = new ScopeConsumerFactory<T>(scopeProvider);

            configurator.Consumer(consumerFactory, configure);
        }

        /// <summary>
        /// Connect a consumer with a consumer factory method
        /// </summary>
        /// <typeparam name="TConsumer"></typeparam>
        /// <typeparam name="TMessage"></typeparam>
        /// <param name="configurator"></param>
        /// <param name="context"></param>
        /// <param name="configure"></param>
        /// <returns></returns>
        public static void Consumer<TConsumer, TMessage>(this IBatchConfigurator<TMessage> configurator, IRegistrationContext context,
            Action<IConsumerMessageConfigurator<TConsumer, Batch<TMessage>>> configure = null)
            where TConsumer : class, IConsumer<Batch<TMessage>>
            where TMessage : class
        {
            IConsumeScopeProvider scopeProvider = new ConsumeScopeProvider(context);

            IConsumerFactory<TConsumer> consumerFactory = new ScopeConsumerFactory<TConsumer>(scopeProvider);

            configurator.Consumer(consumerFactory, configure);
        }

        /// <summary>
        /// Connect a consumer with a consumer factory method
        /// </summary>
        /// <typeparam name="TConsumer"></typeparam>
        /// <typeparam name="TMessage"></typeparam>
        /// <param name="configurator"></param>
        /// <param name="provider"></param>
        /// <param name="configure"></param>
        /// <returns></returns>
        [Obsolete("Use the IRegistrationContext overload instead. Visit https://masstransit.io/obsolete for details.")]
        public static void Consumer<TConsumer, TMessage>(this IBatchConfigurator<TMessage> configurator, IServiceProvider provider,
            Action<IConsumerMessageConfigurator<TConsumer, Batch<TMessage>>> configure = null)
            where TConsumer : class, IConsumer<Batch<TMessage>>
            where TMessage : class
        {
            IConsumeScopeProvider scopeProvider = new ConsumeScopeProvider(provider, LegacySetScopedConsumeContext.Instance);

            IConsumerFactory<TConsumer> consumerFactory = new ScopeConsumerFactory<TConsumer>(scopeProvider);

            configurator.Consumer(consumerFactory, configure);
        }

        /// <summary>
        /// Connect a consumer to the bus/mediator
        /// </summary>
        /// <typeparam name="TConsumer"></typeparam>
        /// <param name="connector"></param>
        /// <param name="context"></param>
        /// <param name="pipeSpecifications"></param>
        /// <returns></returns>
        public static ConnectHandle ConnectConsumer<TConsumer>(this IConsumePipeConnector connector, IRegistrationContext context,
            params IPipeSpecification<ConsumerConsumeContext<TConsumer>>[] pipeSpecifications)
            where TConsumer : class, IConsumer
        {
            if (context == null)
                throw new ArgumentNullException(nameof(context));

            IConsumeScopeProvider scopeProvider = new ConsumeScopeProvider(context);

            IConsumerFactory<TConsumer> consumerFactory = new ScopeConsumerFactory<TConsumer>(scopeProvider);

            return connector.ConnectConsumer(consumerFactory, pipeSpecifications);
        }

        /// <summary>
        /// Connect a consumer to the bus/mediator
        /// </summary>
        /// <typeparam name="TConsumer"></typeparam>
        /// <param name="connector"></param>
        /// <param name="provider"></param>
        /// <param name="pipeSpecifications"></param>
        /// <returns></returns>
        [Obsolete("Use the IRegistrationContext overload instead. Visit https://masstransit.io/obsolete for details.")]
        public static ConnectHandle ConnectConsumer<TConsumer>(this IConsumePipeConnector connector, IServiceProvider provider,
            params IPipeSpecification<ConsumerConsumeContext<TConsumer>>[] pipeSpecifications)
            where TConsumer : class, IConsumer
        {
            if (provider == null)
                throw new ArgumentNullException(nameof(provider));

            IConsumeScopeProvider scopeProvider = new ConsumeScopeProvider(provider, LegacySetScopedConsumeContext.Instance);

            IConsumerFactory<TConsumer> consumerFactory = new ScopeConsumerFactory<TConsumer>(scopeProvider);

            return connector.ConnectConsumer(consumerFactory, pipeSpecifications);
        }

        /// <summary>
        /// Registers a saga using the container that has the repository resolved from the container
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="configurator"></param>
        /// <param name="context"></param>
        /// <param name="configure"></param>
        /// <returns></returns>
        public static void Saga<T>(this IReceiveEndpointConfigurator configurator, IRegistrationContext context,
            Action<ISagaConfigurator<T>> configure = null)
            where T : class, ISaga
        {
            ISagaRepository<T> repository = new DependencyInjectionSagaRepository<T>(context);

            configurator.Saga(repository, configure);
        }

        /// <summary>
        /// Registers a saga using the container that has the repository resolved from the container
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="configurator"></param>
        /// <param name="provider"></param>
        /// <param name="configure"></param>
        /// <returns></returns>
        [Obsolete("Use the IRegistrationContext overload instead. Visit https://masstransit.io/obsolete for details.")]
        public static void Saga<T>(this IReceiveEndpointConfigurator configurator, IServiceProvider provider, Action<ISagaConfigurator<T>> configure = null)
            where T : class, ISaga
        {
            ISagaRepository<T> repository = new DependencyInjectionSagaRepository<T>(provider, LegacySetScopedConsumeContext.Instance);

            configurator.Saga(repository, configure);
        }

        /// <summary>
        /// Subscribe a state machine saga to the endpoint
        /// </summary>
        /// <typeparam name="TInstance">The state machine instance type</typeparam>
        /// <param name="configurator"></param>
        /// <param name="stateMachine"></param>
        /// <param name="context">The Container reference to resolve the repository</param>
        /// <param name="configure">Optionally configure the saga</param>
        /// <returns></returns>
        public static void StateMachineSaga<TInstance>(this IReceiveEndpointConfigurator configurator, SagaStateMachine<TInstance> stateMachine,
            IRegistrationContext context, Action<ISagaConfigurator<TInstance>> configure = null)
            where TInstance : class, SagaStateMachineInstance
        {
            ISagaRepository<TInstance> repository = new DependencyInjectionSagaRepository<TInstance>(context);

            configurator.StateMachineSaga(stateMachine, repository, configure);
        }

        /// <summary>
        /// Subscribe a state machine saga to the endpoint
        /// </summary>
        /// <typeparam name="TInstance">The state machine instance type</typeparam>
        /// <param name="configurator"></param>
        /// <param name="stateMachine"></param>
        /// <param name="serviceProvider">The Container reference to resolve the repository</param>
        /// <param name="configure">Optionally configure the saga</param>
        /// <returns></returns>
        [Obsolete("Use the IRegistrationContext overload instead. Visit https://masstransit.io/obsolete for details.")]
        public static void StateMachineSaga<TInstance>(this IReceiveEndpointConfigurator configurator, SagaStateMachine<TInstance> stateMachine,
            IServiceProvider serviceProvider, Action<ISagaConfigurator<TInstance>> configure = null)
            where TInstance : class, SagaStateMachineInstance
        {
            ISagaRepository<TInstance> repository = new DependencyInjectionSagaRepository<TInstance>(serviceProvider, LegacySetScopedConsumeContext.Instance);

            configurator.StateMachineSaga(stateMachine, repository, configure);
        }

        /// <summary>
        /// Subscribe a state machine saga to the endpoint
        /// </summary>
        /// <typeparam name="TInstance">The state machine instance type</typeparam>
        /// <param name="configurator"></param>
        /// <param name="context">The Container reference to resolve the repository</param>
        /// <param name="configure">Optionally configure the saga</param>
        /// <returns></returns>
        public static void StateMachineSaga<TInstance>(this IReceiveEndpointConfigurator configurator, IRegistrationContext context,
            Action<ISagaConfigurator<TInstance>> configure = null)
            where TInstance : class, SagaStateMachineInstance
        {
            var stateMachine = context.GetRequiredService<SagaStateMachine<TInstance>>();
            ISagaRepository<TInstance> repository = new DependencyInjectionSagaRepository<TInstance>(context);

            configurator.StateMachineSaga(stateMachine, repository, configure);
        }

        /// <summary>
        /// Subscribe a state machine saga to the endpoint
        /// </summary>
        /// <typeparam name="TInstance">The state machine instance type</typeparam>
        /// <param name="configurator"></param>
        /// <param name="provider">The Container reference to resolve the repository</param>
        /// <param name="configure">Optionally configure the saga</param>
        /// <returns></returns>
        [Obsolete("Use the IRegistrationContext overload instead. Visit https://masstransit.io/obsolete for details.")]
        public static void StateMachineSaga<TInstance>(this IReceiveEndpointConfigurator configurator, IServiceProvider provider,
            Action<ISagaConfigurator<TInstance>> configure = null)
            where TInstance : class, SagaStateMachineInstance
        {
            var stateMachine = provider.GetRequiredService<SagaStateMachine<TInstance>>();

            ISagaRepository<TInstance> repository = new DependencyInjectionSagaRepository<TInstance>(provider, LegacySetScopedConsumeContext.Instance);

            configurator.StateMachineSaga(stateMachine, repository, configure);
        }

        public static void ExecuteActivityHost<TActivity, TArguments>(this IReceiveEndpointConfigurator configurator, Uri compensateAddress,
            IRegistrationContext context, Action<IExecuteActivityConfigurator<TActivity, TArguments>> configure = null)
            where TActivity : class, IExecuteActivity<TArguments>
            where TArguments : class
        {
            var executeActivityScopeProvider = new ExecuteActivityScopeProvider<TActivity, TArguments>(context);

            var factory = new ScopeExecuteActivityFactory<TActivity, TArguments>(executeActivityScopeProvider);

            configurator.ExecuteActivityHost(compensateAddress, factory, configure);
        }

        [Obsolete("Use the IRegistrationContext overload instead. Visit https://masstransit.io/obsolete for details.")]
        public static void ExecuteActivityHost<TActivity, TArguments>(this IReceiveEndpointConfigurator configurator, Uri compensateAddress,
            IServiceProvider provider, Action<IExecuteActivityConfigurator<TActivity, TArguments>> configure = null)
            where TActivity : class, IExecuteActivity<TArguments>
            where TArguments : class
        {
            var executeActivityScopeProvider = new ExecuteActivityScopeProvider<TActivity, TArguments>(provider, LegacySetScopedConsumeContext.Instance);

            var factory = new ScopeExecuteActivityFactory<TActivity, TArguments>(executeActivityScopeProvider);

            configurator.ExecuteActivityHost(compensateAddress, factory, configure);
        }

        public static void ExecuteActivityHost<TActivity, TArguments>(this IReceiveEndpointConfigurator configurator, IRegistrationContext context,
            Action<IExecuteActivityConfigurator<TActivity, TArguments>> configure = null)
            where TActivity : class, IExecuteActivity<TArguments>
            where TArguments : class
        {
            var executeActivityScopeProvider = new ExecuteActivityScopeProvider<TActivity, TArguments>(context);

            var factory = new ScopeExecuteActivityFactory<TActivity, TArguments>(executeActivityScopeProvider);

            configurator.ExecuteActivityHost(factory, configure);
        }

        [Obsolete("Use the IRegistrationContext overload instead. Visit https://masstransit.io/obsolete for details.")]
        public static void ExecuteActivityHost<TActivity, TArguments>(this IReceiveEndpointConfigurator configurator, IServiceProvider provider,
            Action<IExecuteActivityConfigurator<TActivity, TArguments>> configure = null)
            where TActivity : class, IExecuteActivity<TArguments>
            where TArguments : class
        {
            var executeActivityScopeProvider = new ExecuteActivityScopeProvider<TActivity, TArguments>(provider, LegacySetScopedConsumeContext.Instance);

            var factory = new ScopeExecuteActivityFactory<TActivity, TArguments>(executeActivityScopeProvider);

            configurator.ExecuteActivityHost(factory, configure);
        }

        public static void CompensateActivityHost<TActivity, TLog>(this IReceiveEndpointConfigurator configurator, IRegistrationContext context,
            Action<ICompensateActivityConfigurator<TActivity, TLog>> configure = null)
            where TActivity : class, ICompensateActivity<TLog>
            where TLog : class
        {
            var compensateActivityScopeProvider = new CompensateActivityScopeProvider<TActivity, TLog>(context);

            var factory = new ScopeCompensateActivityFactory<TActivity, TLog>(compensateActivityScopeProvider);

            configurator.CompensateActivityHost(factory, configure);
        }

        [Obsolete("Use the IRegistrationContext overload instead. Visit https://masstransit.io/obsolete for details.")]
        public static void CompensateActivityHost<TActivity, TLog>(this IReceiveEndpointConfigurator configurator, IServiceProvider provider,
            Action<ICompensateActivityConfigurator<TActivity, TLog>> configure = null)
            where TActivity : class, ICompensateActivity<TLog>
            where TLog : class
        {
            var compensateActivityScopeProvider = new CompensateActivityScopeProvider<TActivity, TLog>(provider, LegacySetScopedConsumeContext.Instance);

            var factory = new ScopeCompensateActivityFactory<TActivity, TLog>(compensateActivityScopeProvider);

            configurator.CompensateActivityHost(factory, configure);
        }
    }
}
