//25-dsa
//25-dbms
//25-oops
//25-cn
//25-os
const quizData = [

    //25-dsa-questions
    {
        question: "Which data structure follows the Last-In-First-Out (LIFO) principle?",
        a: "Queue",
        b: "Stack",
        c: "Linked List",
        d: "Tree",
        correct: "b",
    },//1

    {
        question: "What is the time complexity of the Quick Sort algorithm?",
        a: "O(n)",
        b: "O(n log n)",
        c: "O(n^2)",
        d: "O(2^n)",
        correct: "b",
    },//2

    {
        question: "Which sorting algorithm has the worst-case time complexity of O(n^2)?",
        a: "Bubble Sort",
        b: "Insertion Sort",
        c: "Merge Sort",
        d: "Quick Sort",
        correct: "a",
    },//3

    {
        question: "Which searching algorithm works efficiently on a sorted array?",
        a: "Linear Search",
        b: "Binary Search",
        c: "Depth-First Search",
        d: "Breadth-First Search",
        correct: "b",
    },//4

    {
        question: "Which data structure provides constant-time access to elements based on their key?",
        a: "Array",
        b: "Linked List",
        c: "Stack",
        d: "Hash Table",
        correct: "d",
    },//5

    {
        question: "What is the worst-case time complexity of the Bubble Sort algorithm?",
        a: "O(n)",
        b: "O(n log n)",
        c: "O(n^2)",
        d: "O(2^n)",
        correct: "c",
    },//6

    {
        question: "Which data structure is used for implementing a LIFO behavior?",
        a: "Queue",
        b: "Stack",
        c: "Linked List",
        d: "Tree",
        correct: "b",
    },//7

    {
        question: "What is the time complexity of the Merge Sort algorithm?",
        a: "O(n)",
        b: "O(n log n)",
        c: "O(n^2)",
        d: "O(2^n)",
        correct: "b",
    },//8

    {
        question: "Which sorting algorithm is based on the divide-and-conquer technique?",
        a: "Bubble Sort",
        b: "Insertion Sort",
        c: "Merge Sort",
        d: "Quick Sort",
        correct: "c",
    },//9

    {
        question: "Which data structure represents a hierarchical structure with a set of connected nodes?",
        a: "Queue",
        b: "Stack",
        c: "Linked List",
        d: "Tree",
        correct: "d",
    },//10

    /*
    
            {
            question: "What is the time complexity of the Binary Search algorithm?",
            a: "O(n)",
            b: "O(n log n)",
            c: "O(n^2)",
            d: "O(log n)",
            correct: "d",
            },//11
            
            {
            question: "Which searching algorithm is based on the divide-and-conquer technique?",
            a: "Linear Search",
            b: "Binary Search",
            c: "Depth-First Search",
            d: "Breadth-First Search",
            correct: "b",
            },//12
            
            {
            question: "What is the space complexity of the Quick Sort algorithm?",
            a: "O(n)",
            b: "O(n log n)",
            c: "O(n^2)",
            d: "O(2^n)",
            correct: "a",
            },//13
            
            {
            question: "Which data structure is used for implementing a FIFO behavior?",
            a: "Queue",
            b: "Stack",
            c: "Linked List",
            d: "Tree",
            correct: "a",
            },//14
            
            {
            question: "What is the best-case time complexity of the Bubble Sort algorithm?",
            a: "O(n)",
            b: "O(n log n)",
            c: "O(n^2)",
            d: "O(2^n)",
            correct: "a",
            },//15
            
            {
            question: "Which sorting algorithm is based on the comparison of adjacent elements?",
            a: "Bubble Sort",
            b: "Insertion Sort",
            c: "Merge Sort",
            d: "Quick Sort",
            correct: "a",
            },//16
            
            {
            question: "What is the space complexity of the Merge Sort algorithm?",
            a: "O(n)",
            b: "O(n log n)",
            c: "O(n^2)",
            d: "O(2^n)",
            correct: "b",
            },//17
            
            {
            question: "Which data structure is used for implementing a queue?",
            a: "Array",
            b: "Linked List",
            c: "Stack",
            d: "Hash Table",
            correct: "b",
            },//18
            
            {
            question: "What is the worst-case time complexity of the Insertion Sort algorithm?",
            a: "O(n)",
            b: "O(n log n)",
            c: "O(n^2)",
            d: "O(2^n)",
            correct: "c",
            },//19
            
            {
            question: "Which sorting algorithm is based on the selection of the smallest element?",
            a: "Bubble Sort",
            b: "Insertion Sort",
            c: "Selection Sort",
            d: "Quick Sort",
            correct: "c",
            },//20
            
            {
            question: "What is the space complexity of the Binary Search algorithm?",
            a: "O(n)",
            b: "O(n log n)",
            c: "O(n^2)",
            d: "O(1)",
            correct: "d",
            },//21
            
            {
            question: "Which searching algorithm requires a sorted array?",
            a: "Linear Search",
            b: "Binary Search",
            c: "Depth-First Search",
            d: "Breadth-First Search",
            correct: "b",
            },//22
            
            {
            question: "What is the average-case time complexity of the Quick Sort algorithm?",
            a: "O(n)",
            b: "O(n log n)",
            c: "O(n^2)",
            d: "O(2^n)",
            correct: "b",
            },//23
            
            {
            question: "Which data structure is used for implementing a stack?",
            a: "Array",
            b: "Linked List",
            c: "Queue",
            d: "Hash Table",
            correct: "a",
            },//24
            
            {
            question: "What is the space complexity of the Bubble Sort algorithm?",
            a: "O(n)",
            b: "O(n log n)",
            c: "O(n^2)",
            d: "O(1)",
            correct: "d",
            },//25
    */
    /*
            //25-dbms-questions
            
            {
                question: "Which type of database model organizes data into a collection of key-value pairs?",
                a: "Relational model",
                b: "Hierarchical model",
                c: "Network model",
                d: "NoSQL model",
                correct: "d",
                },//1
                
                {
                question: "Which normal form ensures that every non-key attribute is functionally dependent on the primary key?",
                a: "First normal form (1NF)",
                b: "Second normal form (2NF)",
                c: "Third normal form (3NF)",
                d: "Boyce-Codd normal form (BCNF)",
                correct: "c",
                },//2
                
                {
                question: "Which database operation is used to combine rows from two or more tables based on a related column between them?",
                a: "UNION",
                b: "JOIN",
                c: "INTERSECT",
                d: "MINUS",
                correct: "b",
                },//3
                
                {
                question: "Which language is commonly used to interact with a relational database management system?",
                a: "SQL",
                b: "Java",
                c: "C++",
                d: "Python",
                correct: "a",
                },//4
                
                {
                question: "Which indexing technique organizes data in a tree-like structure with each node having multiple child nodes?",
                a: "B-tree",
                b: "Hashing",
                c: "Binary search tree",
                d: "Heap",
                correct: "a",
                },//5
                
                {
                question: "Which type of join returns only the rows that have matching values in both tables being joined?",
                a: "INNER JOIN",
                b: "LEFT JOIN",
                c: "RIGHT JOIN",
                d: "OUTER JOIN",
                correct: "a",
                },//6
                
                {
                question: "Which keyword is used in SQL to add new data into a database table?",
                a: "ADD",
                b: "INSERT",
                c: "MODIFY",
                d: "UPDATE",
                correct: "b",
                },//7
                
                {
                question: "Which database model organizes data in a tree-like structure with parent-child relationships between records?",
                a: "Relational model",
                b: "Hierarchical model",
                c: "Network model",
                d: "NoSQL model",
                correct: "b",
                },//8
                
                {
                question: "Which type of index is based on the order of the actual data in the table?",
                a: "Clustered index",
                b: "Non-clustered index",
                c: "Hash index",
                d: "B-tree index",
                correct: "a",
                },//9
                
                {
                question: "What is the purpose of a primary key in a database table?",
                a: "To ensure referential integrity",
                b: "To uniquely identify each record",
                c: "To establish relationships between tables",
                d: "To optimize query performance",
                correct: "b",
                },//10
                
                {
                question: "Which database model allows records to have multiple parent and child relationships?",
                a: "Relational model",
                b: "Hierarchical model",
                c: "Network model",
                d: "NoSQL model",
                correct: "c",
                },//11
                
                {
                question: "Which SQL statement is used to delete data from a database table?",
                a: "SELECT",
                b: "UPDATE",
                c: "DELETE",
                d: "REMOVE",
                correct: "c",
                },//12
                
                {
                question: "Which database model stores data in tables with rows and columns?",
                a: "Relational model",
                b: "Hierarchical model",
                c: "Network model",
                d: "NoSQL model",
                correct: "a",
                },//13
                
                {
                question: "Which keyword is used in SQL to modify the structure of a database table?",
                a: "ADD",
                b: "INSERT",
                c: "MODIFY",
                d: "UPDATE",
                correct: "c",
                },//14
                
                {
                question: "Which database model allows flexible and schema-less data storage?",
                a: "Relational model",
                b: "Hierarchical model",
                c: "Network model",
                d: "NoSQL model",
                correct: "d",
                },//15
                
                {
                question: "Which SQL keyword is used to retrieve data from a database table?",
                a: "SELECT",
                b: "UPDATE",
                c: "DELETE",
                d: "INSERT",
                correct: "a",
                },//16
                
                {
                question: "Which database model organizes data in a graph-like structure with nodes and edges?",
                a: "Relational model",
                b: "Hierarchical model",
                c: "Network model",
                d: "NoSQL model",
                correct: "c",
                },//17
                
                {
                question: "Which indexing technique uses a mathematical function to map keys to index values?",
                a: "B-tree",
                b: "Hashing",
                c: "Binary search",
                d: "Heap",
                correct: "b",
                },//18
                
                {
                question: "Which database model stores data in a parent-child hierarchy?",
                a: "Relational model",
                b: "Hierarchical model",
                c: "Network model",
                d: "NoSQL model",
                correct: "b",
                },//19
                
                {
                question: "Which SQL keyword is used to modify existing data in a database table?",
                a: "SELECT",
                b: "UPDATE",
                c: "DELETE",
                d: "INSERT",
                correct: "b",
                },//20
                
                {
                question: "Which type of index is based on the order of the index key values?",
                a: "Clustered index",
                b: "Non-clustered index",
                c: "Hash index",
                d: "B-tree index",
                correct: "d",
                },//21
                
                {
                question: "Which keyword is used in SQL to specify conditions for retrieving data from a database table?",
                a: "WHERE",
                b: "FROM",
                c: "GROUP BY",
                d: "HAVING",
                correct: "a",
                },//22
                
                {
                question: "Which database model allows data to be organized in a collection of documents?",
                a: "Relational model",
                b: "Hierarchical model",
                c: "Network model",
                d: "NoSQL model",
                correct: "d",
                },//23
                
                {
                question: "Which SQL keyword is used to retrieve unique records from a database table?",
                a: "SELECT",
                b: "DISTINCT",
                c: "UNION",
                d: "JOIN",
                correct: "b",
                },//24
                
                {
                question: "Which database model organizes data in a hierarchy with parent and child relationships between records?",
                a: "Relational model",
                b: "Hierarchical model",
                c: "Network model",
                d: "NoSQL model",
                correct: "b",
                },//25
    
                //25-oops-questions
    
                {
                    question: "What is the concept of data hiding in OOP?",
                    a: "Encapsulation",
                    b: "Abstraction",
                    c: "Inheritance",
                    d: "Polymorphism",
                    correct: "a",
                    },//1
                    {
                    question: "Which OOP principle ensures that a subclass can be used in place of its superclass?",
                    a: "Encapsulation",
                    b: "Abstraction",
                    c: "Inheritance",
                    d: "Polymorphism",
                    correct: "c",
                    },//2
                    {
                    question: "Which OOP principle allows an object to have multiple forms or behaviors?",
                    a: "Encapsulation",
                    b: "Abstraction",
                    c: "Inheritance",
                    d: "Polymorphism",
                    correct: "d",
                    },//3
                    {
                    question: "What is the process of creating a new instance of a class called?",
                    a: "Encapsulation",
                    b: "Abstraction",
                    c: "Instantiation",
                    d: "Polymorphism",
                    correct: "c",
                    },//4
                    {
                    question: "Which OOP concept is used to define a blueprint for creating objects?",
                    a: "Encapsulation",
                    b: "Abstraction",
                    c: "Inheritance",
                    d: "Class",
                    correct: "d",
                    },//5
                    {
                    question: "What is the term for creating a new class from an existing class?",
                    a: "Encapsulation",
                    b: "Abstraction",
                    c: "Inheritance",
                    d: "Polymorphism",
                    correct: "c",
                    },//6
                    {
                    question: "What is the process of defining a new method in a subclass with the same name as a method in the superclass?",
                    a: "Method Overloading",
                    b: "Method Overriding",
                    c: "Encapsulation",
                    d: "Polymorphism",
                    correct: "b",
                    },//7
                    {
                    question: "What is the process of defining multiple methods with the same name but different parameters in a class?",
                    a: "Method Overloading",
                    b: "Method Overriding",
                    c: "Encapsulation",
                    d: "Polymorphism",
                    correct: "a",
                    },//8
                    {
                    question: "Which access modifier allows a class or member to be accessible from any other class?",
                    a: "public",
                    b: "private",
                    c: "protected",
                    d: "default",
                    correct: "a",
                    },//9
                    {
                    question: "Which access modifier allows a class or member to be accessible only within its own class?",
                    a: "public",
                    b: "private",
                    c: "protected",
                    d: "default",
                    correct: "b",
                    },//10
                    {
                    question: "Which access modifier allows a class or member to be accessible only within the same package?",
                    a: "public",
                    b: "private",
                    c: "protected",
                    d: "default",
                    correct: "d",
                    },//11
                    {
                    question: "Which access modifier allows a class or member to be accessible only within its own package and subclasses?",
                    a: "public",
                    b: "private",
                    c: "protected",
                    d: "default",
                    correct: "c",
                    },//12
                    {
                    question: "What is the term for defining a method in a subclass with the same name as a method in the superclass?",
                    a: "Method Overloading",
                    b: "Method Overriding",
                    c: "Encapsulation",
                    d: "Polymorphism",
                    correct: "b",
                    },//13
                    {
                    question: "What is the term for defining multiple methods with the same name but different parameters in a class?",
                    a: "Method Overloading",
                    b: "Method Overriding",
                    c: "Encapsulation",
                    d: "Polymorphism",
                    correct: "a",
                    },//14
                    {
                    question: "What is the term for creating a new class that inherits properties and behaviors from an existing class?",
                    a: "Encapsulation",
                    b: "Abstraction",
                    c: "Inheritance",
                    d: "Polymorphism",
                    correct: "c",
                    },//15
                    {
                    question: "What is the term for converting an object into a byte stream to store it in memory or transmit it over a network?",
                    a: "Encapsulation",
                    b: "Abstraction",
                    c: "Serialization",
                    d: "Polymorphism",
                    correct: "c",
                    },//16
                    {
                    question: "What is the term for the process of hiding the internal implementation details of an object and exposing only the necessary information?",
                    a: "Encapsulation",
                    b: "Abstraction",
                    c: "Inheritance",
                    d: "Polymorphism",
                    correct: "a",
                    },//17
                    {
                    question: "What is the term for the process of converting an object into a byte stream to store it in memory or transmit it over a network?",
                    a: "Encapsulation",
                    b: "Abstraction",
                    c: "Serialization",
                    d: "Polymorphism",
                    correct: "c",
                    },//18
                    {
                    question: "What is the term for the ability of an object to take on many forms or have multiple behaviors?",
                    a: "Encapsulation",
                    b: "Abstraction",
                    c: "Inheritance",
                    d: "Polymorphism",
                    correct: "d",
                    },//19
                    {
                    question: "What is the term for a collection of related variables and functions grouped together?",
                    a: "Object",
                    b: "Class",
                    c: "Instance",
                    d: "Method",
                    correct: "b",
                    },//20
                    {
                    question: "What is the term for an instance of a class that encapsulates data and behavior?",
                    a: "Object",
                    b: "Class",
                    c: "Instance",
                    d: "Method",
                    correct: "a",
                    },//21
                    {
                    question: "What is the term for a blueprint or template for creating objects?",
                    a: "Object",
                    b: "Class",
                    c: "Instance",
                    d: "Method",
                    correct: "b",
                    },//22
                    {
                    question: "What is the term for a group of related objects with common properties and behaviors?",
                    a: "Object",
                    b: "Class",
                    c: "Instance",
                    d: "Method",
                    correct: "b",
                    },//23
                    {
                    question: "What is the term for the process of creating a new instance of a class?",
                    a: "Encapsulation",
                    b: "Abstraction",
                    c: "Instantiation",
                    d: "Polymorphism",
                    correct: "c",
                    },//24
                    {
                    question: "What is the most common OOP principle used for code organization and reusability?",
                    a: "Encapsulation",
                    b: "Abstraction",
                    c: "Inheritance",
                    d: "Polymorphism",
                    correct: "c",
                    },//25
    
                    //25-computer-networks-questions
    
                    {
                        question: "What is the purpose of an IP address?",
                        a: "To identify the physical location of a computer",
                        b: "To uniquely identify a computer on a network",
                        c: "To establish a secure connection between computers",
                        d: "To determine the speed of a network connection",
                        correct: "b",
                        },//1
                        
                        {
                        question: "Which protocol is used for transferring files over a network?",
                        a: "FTP",
                        b: "SMTP",
                        c: "HTTP",
                        d: "DHCP",
                        correct: "a",
                        },//2
                        
                        {
                        question: "What is the role of a router in a computer network?",
                        a: "To transmit data packets within a local network",
                        b: "To connect multiple networks together",
                        c: "To convert analog signals to digital signals",
                        d: "To assign IP addresses to devices",
                        correct: "b",
                        },//3
                        
                        {
                        question: "Which network topology requires a central node or device?",
                        a: "Bus",
                        b: "Ring",
                        c: "Star",
                        d: "Mesh",
                        correct: "c",
                        },//4
                        
                        {
                        question: "What is the purpose of DNS in computer networks?",
                        a: "To secure network communication",
                        b: "To convert domain names into IP addresses",
                        c: "To manage network routing",
                        d: "To establish VPN connections",
                        correct: "b",
                        },//5
                        
                        {
                        question: "Which protocol is used for secure communication over a computer network?",
                        a: "FTP",
                        b: "SMTP",
                        c: "HTTP",
                        d: "HTTPS",
                        correct: "d",
                        },//6
                        
                        {
                        question: "What is the function of a firewall in a computer network?",
                        a: "To prevent unauthorized access to the network",
                        b: "To transmit data packets within a local network",
                        c: "To convert analog signals to digital signals",
                        d: "To assign IP addresses to devices",
                        correct: "a",
                        },//7
                        
                        {
                        question: "Which layer of the OSI model is responsible for routing and forwarding data packets?",
                        a: "Physical layer",
                        b: "Data link layer",
                        c: "Network layer",
                        d: "Transport layer",
                        correct: "c",
                        },//8
                        
                        {
                        question: "Which network device operates at the data link layer of the OSI model?",
                        a: "Hub",
                        b: "Switch",
                        c: "Router",
                        d: "Bridge",
                        correct: "b",
                        },//9
                        
                        {
                        question: "What is the purpose of NAT (Network Address Translation) in computer networks?",
                        a: "To encrypt network traffic",
                        b: "To assign IP addresses to devices",
                        c: "To convert private IP addresses to public IP addresses",
                        d: "To manage network routing",
                        correct: "c",
                        },//10
                        
                        {
                        question: "Which protocol is used for sending emails over the Internet?",
                        a: "FTP",
                        b: "SMTP",
                        c: "HTTP",
                        d: "DHCP",
                        correct: "b",
                        },//11
                        
                        {
                        question: "Which networking device operates at the physical layer of the OSI model?",
                        a: "Hub",
                        b: "Switch",
                        c: "Router",
                        d: "Bridge",
                        correct: "a",
                        },//12
                        
                        {
                        question: "What is the function of ARP (Address Resolution Protocol) in computer networks?",
                        a: "To convert domain names into IP addresses",
                        b: "To assign IP addresses to devices",
                        c: "To map IP addresses to MAC addresses",
                        d: "To manage network routing",
                        correct: "c",
                        },//13
                        
                        {
                        question: "What is the purpose of a subnet mask in IP networking?",
                        a: "To identify the physical location of a computer",
                        b: "To uniquely identify a computer on a network",
                        c: "To determine the speed of a network connection",
                        d: "To identify the network and host portions of an IP address",
                        correct: "d",
                        },//14
                        
                        {
                        question: "Which network device operates at the network layer of the OSI model?",
                        a: "Hub",
                        b: "Switch",
                        c: "Router",
                        d: "Bridge",
                        correct: "c",
                        },//15
                        
                        {
                        question: "What is the purpose of DHCP (Dynamic Host Configuration Protocol) in computer networks?",
                        a: "To secure network communication",
                        b: "To convert domain names into IP addresses",
                        c: "To manage network routing",
                        d: "To assign IP addresses to devices",
                        correct: "d",
                        },//16
                        
                        {
                        question: "Which layer of the OSI model is responsible for reliable end-toend communication and error recovery?",
                        a: "Physical layer",
                        b: "Data link layer",
                        c: "Transport layer",
                        d: "Application layer",
                        correct: "c",
                        },//17
                        
                        {
                        question: "What is the purpose of a MAC address in computer networks?",
                        a: "To identify the physical location of a computer",
                        b: "To uniquely identify a computer on a network",
                        c: "To establish a secure connection between computers",
                        d: "To determine the speed of a network connection",
                        correct: "b",
                        },//18
                        
                        {
                        question: "Which network device operates at the data link layer of the OSI model and can operate in both LAN and WLAN environments?",
                        a: "Hub",
                        b: "Switch",
                        c: "Router",
                        d: "Wireless Access Point",
                        correct: "b",
                        },//19
                        
                        {
                        question: "What is the purpose of ICMP (Internet Control Message Protocol) in computer networks?",
                        a: "To convert domain names into IP addresses",
                        b: "To assign IP addresses to devices",
                        c: "To manage network routing",
                        d: "To control and monitor network connectivity",
                        correct: "d",
                        },//20
                        
                        {
                        question: "Which protocol is used for secure remote login to a network device?",
                        a: "FTP",
                        b: "SMTP",
                        c: "SSH",
                        d: "HTTP",
                        correct: "c",
                        },//21
                        
                        {
                        question: "What is the purpose of VLAN (Virtual Local Area Network) in computer networks?",
                        a: "To identify the physical location of a computer",
                        b: "To uniquely identify a computer on a network",
                        c: "To establish separate broadcast domains within a network",
                        d: "To determine the speed of a network connection",
                        correct: "c",
                        },//22
                
                        {
                        question: "Which protocol is used for real-time voice and video communication over IP networks?",
                        a: "FTP",
                        b: "SMTP",
                        c: "VoIP",
                        d: "HTTP",
                        correct: "c",
                        },//23
                        
                        {
                        question: "What is the purpose of a proxy server in computer networks?",
                        a: "To prevent unauthorized access to the network",
                        b: "To transmit data packets within a local network",
                        c: "To convert analog signals to digital signals",
                        d: "To act as an intermediary between client and server requests",
                        correct: "d",
                        },//24
                        
                        {
                        question: "Which layer of the OSI model is responsible for presenting data to the application layer in a readable format?",
                        a: "Physical layer",
                        b: "Data link layer",
                        c: "Presentation layer",
                        d: "Application layer",
                        correct: "c",
                        },//25
    
                        //25-operating-systems-questions
    
                        {
                            question: "What is the main purpose of an operating system?",
                            a: "Manage hardware and software resources",
                            b: "Execute computer programs",
                            c: "Perform mathematical calculations",
                            d: "Provide network connectivity",
                            correct: "a",
                            },//1
                            {
                            question: "What does a scheduler do in an operating system?",
                            a: "Allocate CPU time",
                            b: "Manage memory allocation",
                            c: "Handle file management",
                            d: "Control input/output devices",
                            correct: "a",
                            },//2
                            {
                            question: "What is virtual memory in an operating system?",
                            a: "Additional physical memory",
                            b: "Network management feature",
                            c: "Virtual environment for applications",
                            d: "Memory extension beyond physical limits",
                            correct: "d",
                            },//3
                            {
                            question: "What is the role of a file system in an operating system?",
                            a: "Manage files on storage",
                            b: "User interface for the system",
                            c: "Allocate CPU time",
                            d: "Manage memory allocation",
                            correct: "a",
                            },//4
                            {
                            question: "What is the function of device drivers in an operating system?",
                            a: "Manage files on storage",
                            b: "Provide user interface",
                            c: "Translate high-level commands",
                            d: "Allocate CPU time",
                            correct: "c",
                            },//5
                            {
                            question: "What does a process do in an operating system?",
                            a: "Manage files on storage",
                            b: "Provide user interface",
                            c: "Execute a program",
                            d: "Allocate CPU time",
                            correct: "c",
                            },//6
                            {
                            question: "What is the role of a deadlock in an operating system?",
                            a: "Manage files on storage",
                            b: "Prevent resource conflicts",
                            c: "Allocate CPU time",
                            d: "Create process delays",
                            correct: "d",
                            },//7
                            {
                            question: "What does synchronization achieve in an operating system?",
                            a: "Manage files on storage",
                            b: "Prevent resource conflicts",
                            c: "Provide user interface",
                            d: "Allocate CPU time",
                            correct: "b",
                            },//8
                            {
                            question: "What is the purpose of a file allocation table (FAT)?",
                            a: "Manage files on storage",
                            b: "Prevent resource conflicts",
                            c: "Provide user interface",
                            d: "Translate device commands",
                            correct: "a",
                            },//9
                            {
                            question: "What does a page table do in an operating system?",
                            a: "Manage files on storage",
                            b: "Allocate CPU time",
                            c: "Provide user interface",
                            d: "Map virtual to physical memory",
                            correct: "d",
                            },//10
                            {
                            question: "What is the role of a shell in an operating system?",
                            a: "Manage files on storage",
                            b: "Prevent resource conflicts",
                            c: "Provide user interface",
                            d: "Allocate CPU time",
                            correct: "c",
                            },//11
                            {
                            question: "What does a cache do in an operating system?",
                            a: "Provide additional memory",
                            b: "Manage network connections",
                            c: "Store frequently accessed data",
                            d: "Expand physical memory",
                            correct: "c",
                            },//12
                            {
                            question: "What is the purpose of a file descriptor in an operating system?",
                            a: "Manage files on storage",
                            b: "Prevent resource conflicts",
                            c: "Provide user interface",
                            d: "Represent an open file",
                            correct: "d",
                            },//13
                            {
                            question: "What is a context switch in an operating system?",
                            a: "Manage files on storage",
                            b: "Prevent resource conflicts",
                            c: "Provide user interface",
                            d: "Save and restore process state",
                            correct: "d",
                            },//14
                            {
                            question: "What is the role of a semaphore in an operating system?",
                            a: "Manage files on storage",
                            b: "Prevent resource conflicts",
                            c: "Provide user interface",
                            d: "Allocate CPU time",
                            correct: "b",
                            },//15
                            {
                            question: "What is the purpose of a pipe in an operating system?",
                            a: "Manage files on storage",
                            b: "Prevent resource conflicts",
                            c: "Enable inter-process communication",
                            d: "Allocate CPU time",
                            correct: "c",
                            },//16
                            {
                            question: "What does a bootloader do in an operating system?",
                            a: "Manage files on storage",
                            b: "Prevent resource conflicts",
                            c: "Load the operating system into memory",
                            d: "Allocate CPU time",
                            correct: "c",
                            },//17
                            {
                            question: "What is the purpose of a kernel in an operating system?",
                            a: "Provide hardware components",
                            b: "Manage computer resources",
                            c: "Execute computer programs",
                            d: "Perform mathematical calculations",
                            correct: "b",
                            },//18
                            {
                            question: "What does a cache coherence protocol manage in an operating system?",
                            a: "Manage files on storage",
                            b: "Prevent resource conflicts",
                            c: "Manage data consistency in shared caches",
                            d: "Allocate CPU time",
                            correct: "c",
                            },//19
                            {
                            question: "What is the purpose of a mutex in an operating system?",
                            a: "Manage files on storage",
                            b: "Prevent resource conflicts",
                            c: "Enable inter-process communication",
                            d: "Allocate CPU time",
                            correct: "b",
                            },//20
                            {
                                question: "What is the purpose of a semaphore in an operating system?",
                                a: "Manage files on storage",
                                b: "Prevent resource conflicts",
                                c: "Enable inter-process communication",
                                d: "Allocate CPU time",
                                correct: "b",
                                },//21
                                {
                                question: "What is the role of a page replacement algorithm in an operating system?",
                                a: "Manage files on storage",
                                b: "Prevent resource conflicts",
                                c: "Allocate CPU time",
                                d: "Replace pages in memory",
                                correct: "d",
                                },//22
                                {
                                question: "What is the purpose of a command-line interface (CLI) in an operating system?",
                                a: "Manage files on storage",
                                b: "Prevent resource conflicts",
                                c: "Provide a graphical user interface",
                                d: "Enable text-based interaction with the system",
                                correct: "d",
                                },//23
                                {
                                question: "What does a scheduler do in a multi-core operating system?",
                                a: "Allocate CPU time to processes",
                                b: "Manage memory allocation",
                                c: "Handle input/output devices",
                                d: "Manage network connectivity",
                                correct: "a",
                                },//24
                                {
                                question: "What is the purpose of a file compression algorithm in an operating system?",
                                a: "Manage files on storage",
                                b: "Reduce file size to save storage space",
                                c: "Allocate CPU time",
                                d: "Handle network communications",
                                correct: "b",
                                }//25
    
    */
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});