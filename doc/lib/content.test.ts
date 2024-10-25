import { expect } from 'chai'
import {groupContent} from "./content";
import {ParsedContent} from "@nuxt/content/dist/runtime/types";

describe("a", () => {
    it("a", ()=>{
        const result = groupContent(items)

        expect(result.attributes.title).to.eql('Configuration')
        expect(result.attributes.icon).to.eql('icon-park-outline:mindmap-list')

        expect(result.pages.length).to.eql(2)
        expect(result.children.length).to.eql(5)
        const c = result.children[0]
        expect(c.attributes.title).to.eql('Transports')
        expect(c.pages.length).to.eql(8)

    })
})

const items : Omit<ParsedContent,'body'>[] = [
    {
        "_path": "/documentation/configuration/_dir",
        "_dir": "configuration",
        "_draft": false,
        "_partial": true,
        "_locale": "en",
        "title": "Configuration",
        "icon": "icon-park-outline:mindmap-list",
        "_id": "content:2.documentation:5.configuration:_dir.yml",
        "_type": "yaml",
        "_source": "content",
        "_file": "2.documentation/5.configuration/_dir.yml",
        "_extension": "yml"
    },
    {
        "_path": "/documentation/configuration",
        "_dir": "documentation",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "Overview",
        "description": "Configure ALL THE THINGS",
        "toc": true,
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:4.scheduling.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/4.scheduling.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/transports/_dir",
        "_dir": "transports",
        "_draft": false,
        "_partial": true,
        "_locale": "en",
        "title": "Transports",
        "navigation": {
            "redirect": "/documentation/configuration/transports/rabbitmq"
        },
        "_id": "content:2.documentation:5.configuration:1.transports:_dir.yml",
        "_type": "yaml",
        "_source": "content",
        "_file": "2.documentation/5.configuration/1.transports/_dir.yml",
        "_extension": "yml"
    },
    {
        "_path": "/documentation/configuration/transports/rabbitmq",
        "_dir": "transports",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "RabbitMQ",
        "description": "",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:1.transports:2.rabbitmq.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/1.transports/2.rabbitmq.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/transports/azure-service-bus",
        "_dir": "transports",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "Azure Service Bus",
        "description": "",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:1.transports:3.azure-service-bus.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/1.transports/3.azure-service-bus.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/transports/amazon-sqs",
        "_dir": "transports",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "Amazon SQS",
        "description": "",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:1.transports:4.amazon-sqs.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/1.transports/4.amazon-sqs.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/transports/activemq",
        "_dir": "transports",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "ActiveMQ",
        "description": "",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:1.transports:5.activemq.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/1.transports/5.activemq.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/transports/kafka",
        "_dir": "transports",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "Kafka",
        "description": "Kafka is supported as a Rider, and supports consuming and producing messages from/to Kafka topics. The Confluent .NET client is used, and has been tested with the community edition (running in Docker).",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:1.transports:10.kafka.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/1.transports/10.kafka.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/transports/azure-event-hub",
        "_dir": "transports",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "Azure Event Hub",
        "description": "Azure Event Hub is included as a Rider, and supports consuming and producing messages from/to Azure event hubs.",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:1.transports:11.azure-event-hub.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/1.transports/11.azure-event-hub.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/transports/azure-functions",
        "_dir": "transports",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "Azure Functions",
        "description": "Azure Functions is a consumption-based compute solution that only runs code when there is work to be done. MassTransit supports Azure Service Bus and Azure Event Hubs when running as an Azure Function.",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:1.transports:21.azure-functions.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/1.transports/21.azure-functions.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/transports/aws-lambda",
        "_dir": "transports",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "AWS Lambda",
        "description": "",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:1.transports:22.aws-lambda.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/1.transports/22.aws-lambda.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/persistence/_dir",
        "_dir": "persistence",
        "_draft": false,
        "_partial": true,
        "_locale": "en",
        "title": "Persistence",
        "_id": "content:2.documentation:5.configuration:2.persistence:_dir.yml",
        "_type": "yaml",
        "_source": "content",
        "_file": "2.documentation/5.configuration/2.persistence/_dir.yml",
        "_extension": "yaml"
    },
    {
        "_path": "/documentation/configuration/persistence/azure-cosmos",
        "_dir": "persistence",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "Azure Cosmos DB",
        "description": "",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:2.persistence:azure-cosmos.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/2.persistence/azure-cosmos.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/persistence/azure-service-bus",
        "_dir": "persistence",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "Azure Service Bus",
        "description": "Azure Service Bus provides a feature called message sessions, to process multiple messages at once and to store some state on a temporary basis, which can be retrieved by some key.",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:2.persistence:azure-service-bus.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/2.persistence/azure-service-bus.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/persistence/azure-table",
        "_dir": "persistence",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "Azure Table Storage",
        "description": "Azure Tables are exposed in two ways in Azure - via Storage accounts & via the premium offering within Cosmos DB APIs. This persistence supports both implementations and behind the curtains uses the Azure.Data.Tables library for communication.",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:2.persistence:azure-table.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/2.persistence/azure-table.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/persistence/dapper",
        "_dir": "persistence",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "Dapper",
        "description": "MassTransit.Dapper",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:2.persistence:dapper.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/2.persistence/dapper.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/persistence/dynamodb",
        "_dir": "persistence",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "DynamoDb",
        "description": "",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:2.persistence:dynamodb.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/2.persistence/dynamodb.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/persistence/entity-framework",
        "_dir": "persistence",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "Entity Framework",
        "description": "MassTransit.EntityFrameworkCore",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:2.persistence:entity-framework.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/2.persistence/entity-framework.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/persistence/marten",
        "_dir": "persistence",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "Marten",
        "description": "",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:2.persistence:marten.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/2.persistence/marten.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/persistence/mongodb",
        "_dir": "persistence",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "MongoDB",
        "description": "MongoDB is easy to setup as a saga repository. MassTransit includes sensible defaults, and there is no need to explicitly map sagas.",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:2.persistence:mongodb.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/2.persistence/mongodb.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/persistence/nhibernate",
        "_dir": "persistence",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "NHibernate",
        "description": "",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:2.persistence:nhibernate.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/2.persistence/nhibernate.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/persistence/redis",
        "_dir": "persistence",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "Redis",
        "description": "",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:2.persistence:redis.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/2.persistence/redis.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/middleware/_dir",
        "_dir": "middleware",
        "_draft": false,
        "_partial": true,
        "_locale": "en",
        "title": "Middleware",
        "_id": "content:2.documentation:5.configuration:3.middleware:_dir.yml",
        "_type": "yaml",
        "_source": "content",
        "_file": "2.documentation/5.configuration/3.middleware/_dir.yml",
        "_extension": "yml"
    },
    {
        "_path": "/documentation/configuration/middleware",
        "_dir": "configuration",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "Overview",
        "description": "MassTransit is built using a network of pipes and filters to dispatch messages. A pipe is composed of a series of filters, each of which is a key atom and are described below.",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:3.middleware:4.scheduling.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/3.middleware/4.scheduling.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/middleware/filters",
        "_dir": "middleware",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "Filters",
        "description": "",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:3.middleware:1.filters.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/3.middleware/1.filters.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/middleware/outbox",
        "_dir": "middleware",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "Transactional Outbox",
        "description": "It is common that a service may need to combine database writes with publishing events and/or sending commands. And in this scenario, it is usually desirable to do this atomically in a transaction. However, message brokers typically do not participate in transactions. Even if a message broker did support transactions, it would require two-phase commit (2PC) which should be avoided whenever possible.",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:3.middleware:2.outbox.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/3.middleware/2.outbox.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/middleware/scoped",
        "_dir": "middleware",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "Custom",
        "description": "",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:3.middleware:3.scoped.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/3.middleware/3.scoped.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/middleware/transactions",
        "_dir": "middleware",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "Transaction",
        "description": "::: warning\nTransactions, and using a shared transaction, is an advanced concept. Every scenario is different, so this is more of a guideline than a rule.\n:::",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:3.middleware:transactions.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/3.middleware/transactions.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/scheduling/_dir",
        "_dir": "scheduling",
        "_draft": false,
        "_partial": true,
        "_locale": "en",
        "title": "Scheduling",
        "_id": "content:2.documentation:5.configuration:4.scheduling:_dir.yml",
        "_type": "yaml",
        "_source": "content",
        "_file": "2.documentation/5.configuration/4.scheduling/_dir.yml",
        "_extension": "yml"
    },
    {
        "_path": "/documentation/configuration/scheduling",
        "_dir": "configuration",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "Overview",
        "description": "",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:4.scheduling:4.scheduling.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/4.scheduling/4.scheduling.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/scheduling/quartz",
        "_dir": "scheduling",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "Quartz.NET",
        "description": "",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:4.scheduling:1.quartz.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/4.scheduling/1.quartz.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/scheduling/hangfire",
        "_dir": "scheduling",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "Hangfire",
        "description": "",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:4.scheduling:2.hangfire.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/4.scheduling/2.hangfire.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/scheduling/activemq",
        "_dir": "scheduling",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "ActiveMQ",
        "description": "MassTransit uses the built-in ActiveMQ scheduler to schedule messages.",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:4.scheduling:activemq.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/4.scheduling/activemq.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/scheduling/amazon-sqs",
        "_dir": "scheduling",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "Amazon SQS",
        "description": "Amazon SQS includes a DelaySeconds property, which can be used to defer message delivery. MassTransit uses this feature to provide scheduled message delivery.",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:4.scheduling:amazon-sqs.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/4.scheduling/amazon-sqs.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/scheduling/azure-service-bus",
        "_dir": "scheduling",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "Azure Service Bus",
        "description": "Azure Service Bus allows the enqueue time of a message to be specified, making it possible to schedule messages without the use of a separate message scheduler. MassTransit uses this feature to schedule messages.",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:4.scheduling:azure-service-bus.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/4.scheduling/azure-service-bus.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/scheduling/rabbitmq",
        "_dir": "scheduling",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "RabbitMQ",
        "description": "MassTransit uses the RabbitMQ delayed exchange plug-in to schedule messages.",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:4.scheduling:rabbitmq.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/4.scheduling/rabbitmq.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/integrations/_dir",
        "_dir": "integrations",
        "_draft": false,
        "_partial": true,
        "_locale": "en",
        "title": "Integrations",
        "_id": "content:2.documentation:5.configuration:5.integrations:_dir.yml",
        "_type": "yaml",
        "_source": "content",
        "_file": "2.documentation/5.configuration/5.integrations/_dir.yml",
        "_extension": "yaml"
    },
    {
        "_path": "/documentation/configuration/integrations/signalr",
        "_dir": "integrations",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "SignalR",
        "description": "MassTransit offers a package which provides an easy option to get a SignalR Backplane up and running in with just a few lines of configuration. We won't go over the concept of a SignalR Backplane, more details can be found out about it here. This page is old, and references the .NET Framework SignalR, but the concepts of scale out are the same for the newer .NET Core SignalR.",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:5.integrations:1.signalr.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/5.integrations/1.signalr.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/integrations/logging",
        "_dir": "integrations",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "Logging",
        "description": "The MassTransit framework has fully adopted the Microsoft.Extensions.Logging framework.\nSo, it will use whatever logging configuration is already in your container.",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:5.integrations:logging.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/5.integrations/logging.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/integrations/nsb",
        "_dir": "integrations",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "NServiceBus",
        "description": "",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:5.integrations:nsb.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/5.integrations/nsb.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/multibus",
        "_dir": "configuration",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "MultiBus",
        "description": "pronounced mool-tee-buss",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:multibus.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/multibus.md",
        "_extension": "md"
    },
    {
        "_path": "/documentation/configuration/observability",
        "_dir": "configuration",
        "_draft": false,
        "_partial": false,
        "_locale": "en",
        "_empty": false,
        "title": "Observability",
        "description": "",
        "_type": "markdown",
        "_id": "content:2.documentation:5.configuration:observability.md",
        "_source": "content",
        "_file": "2.documentation/5.configuration/observability.md",
        "_extension": "md"
    }
]
