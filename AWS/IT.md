# AWS Cloud Practicioner Course Notes

## Cloud computing

On demand delivery of computer power

### Types of cloud

- On premise: Applications, Data, Runtime, Middleware, OS, Virtualization, Servers, Storage, Networking

- Infrastructure as a service (IaaS) EC2: Applications, Data, Runtime, Middleware, OS, the rest is managed by AWS

- Platform as a service (PaaS): Applications, Data the rest is managed by AWS

- Software as a service (SaaS): Everything is managed by AWS

### AWS Global Infrastructure

    - Regions
    - Availability Zones
    - Data Centers
    - Edge Localtions

### AWS Regions

    - Compliance: depende del gobierno o cosas legales
    - Proximity: a los clientes
    - Available services: dependiendo de la region AWS tienen diferentes funciones
    - Pricing: el precio depende de la region 
Cada region tiene 3 a 6 servidores, los cuales son independientes y aislados de los otros

### Shared responsability Model

El cliente es responsable de la seguridad de su aplicacion y amazon es responsable de la seguridad de sus servicios y sus servidores

## IAM (Identity and Access Management), Global Service

- Usuarios de la organizacion

- Grupos de Usuarios

    Un usuario puede estar en multiples grupos o en ninguno
    Permisos (es un JSON con los permisos del usuario)

    Se puede crear una url propia de la cuenta de aws para que ingresen desde ahi.

- Policies
    Propiedades y permisos propios de un grupo o usuarios

- Structure (es el JSON que define los permisos) <details>                           <summary>Example</summary>
    <pre>
    {
        "Version": "2012-10-17",
        "Id": "S3-Account-Permissions",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": [
                    "s3: GetObject"
                ]
            }
        ]
    }
    </pre>
</details>

- Password policies (lenght, characters, expiration, etc).
  
- MFA (Two factor authentication).
  - Virtual MFA (Google Authenticator).
  - Universal 2nd Factor Security key (U2F) (Yubikey).
  - Hardware Key Fob
  - Special Hardware Key Fob

- Ways to access to your AWS account
  - AWS Management console (web + username + MFA)
  - AWS Command Line Interface (protected by keys)
  - AWS SDK (protected by keys)

- Roles (Create roles for AWS services or external services so they can interact with aws)
  - EC2
  - Lambda

Shared responsabilty model:
AWS
Infrastructure, Configurationm, Compliance validation
You

Users, AIM
MFA and security in accounts
Access patterns

IAM SUMMARY
Users
Groups
Policies JSON
Roles
Security MFA + Password policy
AWS CLI
AWS SDK
Audit

## EC2

OS Linux, Windows, MacOS
CPU
RAM
STORAGE
IP
FIREWALL
Bootstrap script (commands when machine starts)

Instance types:
    - General pourporse
    - Compute optimized (batch processing, modeling or machine learning, gaming servers)
    - Memory optimized (databases, cache store, BI, realtime data processing)

### Security groups: (works like a firewall)

    - Allow inbound traffic
    - Allow outbound traffic
    - Allow traffic from a specific source
    - ligados a la region
    - ssh debe tener su security group aparte
    - si no se puede acceder es el security group, pero si da connection refused es que es problema de la aplicacion
    - los security groups se pueden referenciar entre ellos

### Ports

    22 ssh
    21 ftp
    22 sftp
    80 http
    443 https
    3389 Remote desktop

### IAM Credentials

Do not use IAM credential into an instance, use iam role.

### EC2 Instances options:

    - On demand instances -> short worload, pay by second, highest price but no commitment or payment upfront
    - Reserved instances -> long workloads, you reserve specific instance atributes (Type, Region, Tenancy, OS), periods of 1year to 3years
    - Saving plans -> 1 to 3 years, commit to an amount of usage
    - Spot Instances -> cheapest, short workloads, you can loose them if you got over budget
    - Dedicated hosts -> book an entire server, server fully to you
    - Dedicated instances -> do not share hardware
    - Capacity reservations -> reserve capacity for a period of time

### Shared responsability model

    AWS
    Infrastructure, Configuration, Compliance validation
    
    You
    Security group rules, OS security and updates, IAM, data security

## EC2 Storage

    EBS (Elastic Block Store): can  be attached to an instance, only one instance at a time. Network USB stick.
    Can de atached and detached to instances easy and quickly
    Bound to region as the instances
    There is an option in the instance to delete the EBS when the instance is terminated
    Tied to avialability zones

### Storage Snapshots

    Backup of your ebs
    You can create an snapshot of your ebs in one region and copy it to another region
    You can create volumes from snapshots

### AMI (Amazon Machine Image)

    You can create an AMI from an existing instance and use it to create more instances like the image
    Customizations of an EC2 instance (OS, fast boot, etc)
    Can be copied across regions
    You can sell AMIs

### EC2 Image Builder

    Automates the creation of Virtual Machines or container images
    Performs tasks in EC2, can build a custom image and run a Test suite

### EC2 Instance Store

    Physical HDD attached to our instance, the storage is lost with the instance, used more for temporal data.
    Volatile but has better performance

### EFS (Elastic File System)

    Shared storage between instances
    Expensive (x3)
    Can be from multiple regions

### EFS-IA (EFS Infrequent Access)

    Cost optimized
    92% lower cost
    Older files are moved from EFS to EFS-IA

### Shared responsability model for Storage

    AWS
    Infrastructure, Replication of data for EBS volumes and drives, replace faulty hardware
    
    You
    Data security, backups and snapshots, encryption, risk of using EC2 Instance Store

### FSX For Windows Server

    Supports windows clients 

### FSX For Lustre

    High performance
    Linux clusters

### EC2 Instance Storage - Summary

• EBS volumes:
• network drives attached to one EC2 instance at a time
• Mapped to an Availability Zones
• Can use EBS Snapshots for backups / transferring EBS volumes across AZ
• AMI: create ready-to-use EC2 instances with our customizations
• EC2 Image Builder: automatically build, test and distribute AMls
• EC2 Instance Store:
• High performance hardware disk attached to our EC2 instance
• Lost if our instance is stopped / terminated
• EFS: network file system, can be attached to 100s of instances in a region
• EFS-IA: cost-optimized storage class for infrequent accessed files
• FSx for Windows: Network File System for Windows servers
• FSx for Lustre: High Performance Computing Linux file system

## Elastic load balancing

### Scalability

Vertical (up, down, hardware): increase size of the instance, t2micro to t2large
Horizontal (Elasticity, out, in): increase number of instances, high availability

• Scalability: ability to accommodate a larger load by making the hardware
stronger (scale up), or by adding nodes (scale out)
• Elasticity: once a system is scalable, elasticity means that there will be
some "auto-scaling" so that the system can scale based on the load. This
is "cloud-friendly: pay-per-use, match demand, optimize costs
• Agility: (not related to scalability - distractor) new IT resources are only a click away, which means that you reduce the time to make those
resources available to your developers from weeks to just minutes.

### Load balancing

Server that re routes internet traffic to other servers

    User 1 \                  / EC2 Instance
    User 2 -   Load balancer  - EC2 Instance
    User 3 /                  \ EC2 Instance

Pros:
• Expose only one point of access DNS
• Spread work across multiple instances
• Regular health checks on instances

AWS handles load balancing, garantees it works and does upgrades, maintance. The user only has to configure it.

### Types

• Application Load Balancer (HTTP/HTTPS/gRPC) - Layer 7
• Network Load Balancer (TCP/UDP) - Layer 4
• Gateway - Layer 3 (GENEVE/Firewall)

### Auto Scaling Group ASG

Adds or removes EC2 instances as needed, replaces unhealthy instances. Saves costs.

Works with the load balancer

Users - Load Balancer - EC2 Instances (Auto Scaling Group)

Manual: update the size manually
Dynamic: reacts on demand
    • Simple: When a CloudWatch is triggered add units
    • Target Tracking scaling: Scales based on a condition
    • Scheduled Scaling: Scales based on known usage patterns
    • Predictive Scaling: Uses machine learning to predict future traffic

## S3

Infinite scaling storage. Backup storage.

### S3 Buckets

Files are stored in buckets. Buckets must have an unique name across all regions and accounts. Buckets are defined at region level.
S3 is global but buckets are at region level.

#### Naming buckets

• No uppercase, no underescore
• 3-63 characters
• Not an IP
• Must start with lowercase letter or number
• Must NOT start with prefix xn--
• Must NOT end with the suffix -s3alias

### S3 Objects

#### Keys

All objects (files) have a key. For example a full path is: s3://bucket/file.txt or s3://bucket/subfolder/file.txt
There are no folders in buckets, just long keys with slashes that emulate that.

#### cont

Max size is 5TB. You can't upload more than 5GB files at once, you have to use multipart upload.

### S3 Security

• User Based with IAM Policies
• Resource Based:
    • Bucket Policies: bucket rules from S3 console, allows cross account
    • Object Access Control List (ACL)
    • Bucket Access Control List (ACL)
• Encryption

### S3 Bucket Policies

They're used to grant access to the bucket, force objects to be encrypted at upload or grant access to another account.

JSON example: ([policy generator](https://awspolicygen.s3.amazonaws.com/policygen.html))

        {
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Sid": "PublicReadGetObject",
                    "Effect": "Allow",
                    "Action": [
                        "s3: GetObject"
                    ],
                    "Resource": [
                        "arn:aws:s3:::mybucket/*"
                    ]
                }
        }

• Resource: buckets and objects
• Effect: allow or deny
• Actions: Set of API to Allow or Deny

### S3 Bucket Versioning

You can version your files, but it's best to version the buckets.
If you suspend versioning it does not delete the history.

### S3 Bucket Replication

Cross region or same region (CRR), it is asynchronous, can be across accounts, must give IAM permissions. Replicates the bucket to another region.

Same region replcation (SRR). Live replication between production and test accounts.

### S3 Storage Classes

• Standart - General Purpose: Frequent accessed data, low latency. Use case: Big Data Analytics, Mobile and Gaming Applications, content distribution.

• Standard Infrequent Access: Data less frequently accessed, but requires rapid access when needed. Lower cost than Standard. Use Case: Disaster Recovery and Backups.

• Standard One Zone Infrequent Access: High durability. Use Case: Storing secondary backup copies of on-premise data.

• Glacier Instant Retrieval: Milisecond retrieval. Minimun duration 90 days.

• Glacier Flexible Retrieval: Minimun duration 90 days
    Expedited: 1 to 5 minutes
    Standard: 3 to 5 hours
    Bulk: 5 to 12 hours

• Glacier Deep Archive: Minimun duration 180 days.
    Standard: 12hrs
    Bulk: 48hrs

• Intelligent Tiering: Small monthly monitoring and auto-tiering fee. Moves objects automatically between Access Tiers based on usage.

### S3 Encryption

• Server side encryption: server does the encryption after uploading. Always on.
• Client side encryption: client does the encryption before uploading.

### S3 Shared Responsability

AWS:
• Infrastructure
• Configuration and vulnerabilities
• Compliance

User:
• S3 Versioning
• S3 Bucket Policies
• Replication Setup
• Logging and Monitoring
• Storage Class
• Encryption

### AWS Snow Family

Helps with data migration

Data Migration: Snowcone, Snowball Edge (Petabyte), Snowmobile (Exabyte)

Edge Computing: Snowcone, Snowball Edge

### AWS Storage Gateway

Bridge between S3 and on Premise Data

Types: File, Volume and Tape Gateway

## Databases

### Relational Databases SQL

Tables for entities, with properties as columns and relationships between them.

### Non-Relational Databases NoSQL

Data uses schemas, and uses data models. Keyvalue, document, graph, in memory, search databases.

### Relational Database Service - RDS

Uses SQL as query language, could be Postgres, MySQL, MariaDB, Oracle, Mssql, AuroraDB

RDS vs EC2: managed by aws, continous backups, monitoring dashboards, high availability, replicas, saling capacity, storage backup to EBS, can't SSH.

Aurora: supports Postgres and Mysql, cloud optimized, storage grows automatically, more efficient and cost effective.

### RDS Deployment

• Read Replicas: up to 15 replicas, writing is only done in the main database.

• Multi-AZ: different availability zones, data is handled by main database until something happens.

• Multi-Region: the read operation can be done in any region, writing is done in the main database region. There is a Replicatin Cost.

### ElastiCache

Manages Redis or Memcached, reduces load from dabatases, works like a cache to reduce pressure from the main database. AWS does OS maintance, patching, optimization, setup, configuration, etc.

        Load balancer -> Ec2 instances -> Rds Database
                                       -> ElastiCache Database

### DynamoDB

NoSQL database, serverless, works with massive workloads, high availability, low latency. IAM security. Key value database. Every objects has a Partition Key and a Sort Key. You just create tables.

### DynamoDB Accelerator - DAX

In cache DynamoDB, 10X Performance

### DynamoDB Global tables

Make DynamoDB tables accesible with low latency in multiple regions

### Elastic MapReduce - EMR

Used to process a larga amount of data (Hadoop Cluster). Allows multiple servers to work as a cluster and handle data together. Creates and configures EC2 instances to work together.

### Amazon Athena

Serverlesss query service to do analytics in S3 data. Presto engine. Pricing is 5$ per terabyte of data analized. Use case: Bussiness Intelligence, analytics, reporting, etc.

### Amazon Quicksight

Serverlesss qmachine learning bussiness intelligence to create interactive dashboards. Use cases: Bussiness Intelligence, VISUALIZATION. Integrated with RDS, Aurora, Athena, S3, Redshift, etc.

### Document DB

Aurora version of MongoDB (Amazon optimized)

### Neptune

Fully managed graph database, recommended for knowled graphs (Wikipedia), Social networks, recomendation engines.

### Amazon QLDB

Quantum Ledger Database. It is used to record financial records, serverlesss, high availability, replication across 3 azs. Each data has a journal that stores the updates of the data.

### Amazon Managed Blockchain

Join public blockchain networks or create your own. Works with HyperLedger fabric and Ethereum.

### Glue

ETL Service, fully serverless. Can combine a Bucket and RDS. Transforms data to store into other databases.

### DMS - Database Migration Service

Helps migrate an EC2 database to RDS, the EC2 database remains accesible during the process, supports Homogeneus migration oracle->oracle and heterogeneous migration MySQL->Aurora

## Containers and Docker

### ECS - Elastic Container Service

Docker in AWS. You must create and maintain the EC2 instances. AWS starts and stops containers for you and integrates them with the load balancer.

### Fargate

Docker in AWS, serverless offering, AWS runs the container for us

### ECR - Elastic Container Registry

Docker registry for AWS, stores docker images for Fargate and ECS.

## AWS Lambda

Virtual functions, limited by time, short executions, run on-demand



## AWS CLI commands

    aws iam list-users //lists all users
    aws iam list-groups //lists all groups
    aws iam list-groups-for-user //lists all groups for user
    aws iam get-group //gets group
