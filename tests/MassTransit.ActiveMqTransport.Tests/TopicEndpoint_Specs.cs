namespace MassTransit.ActiveMqTransport.Tests
{
    using System;
    using System.Threading.Tasks;
    using Apache.NMS;
    using MassTransit.Testing;
    using NUnit.Framework;
    using TestFramework.Messages;


    [TestFixture(ActiveMqHostAddress.ActiveMqScheme)]
    [TestFixture(ActiveMqHostAddress.AmqpScheme)]
    public class Sending_to_a_topic_endpoint :
        ActiveMqTestFixture
    {
        public Sending_to_a_topic_endpoint(string protocol)
            : base(protocol)
        {
        }

        [Test]
        public async Task Should_succeed()
        {
            var endpoint = await Bus.GetSendEndpoint(new Uri("topic:private"));
            await endpoint.Send(new PrivateMessage { Value = "Hello" });

            ConsumeContext<PrivateMessage> context = await _handler;

            Assert.That(context.Message.Value, Is.EqualTo("Hello"));
        }

        Task<ConsumeContext<PrivateMessage>> _handler;

        protected override void ConfigureActiveMqBus(IActiveMqBusFactoryConfigurator configurator)
        {
            base.ConfigureActiveMqBus(configurator);
        }

        protected override void ConfigureActiveMqReceiveEndpoint(IActiveMqReceiveEndpointConfigurator configurator)
        {
            configurator.ConfigureConsumeTopology = false;

            configurator.Bind("private");

            _handler = Handled<PrivateMessage>(configurator);

            Handled<PingMessage>(configurator);
        }


        class PrivateMessage
        {
            public string Value { get; set; }
        }
    }
}
