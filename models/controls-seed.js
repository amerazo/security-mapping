const controlsSeedData = [

    {
        "controlIdentifier": "AC-2(1)",
        "controlName": "Account Management | Automated System Account Management",
        "controlText": "Support the management of system accounts using [Assignment: organization-defined automated mechanisms].",
        "discussion": "Automated system account management includes using automated mechanisms to create, enable, modify, disable, and remove accounts; notify account managers when an account is created, enabled, modified, disabled, or removed, or when users are terminated or transferred; monitor system account usage; and report atypical system account usage. Automated mechanisms can include internal system functions and email, telephonic, and text messaging notifications.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-2(2)",
        "controlName": "Account Management | Automated Temporary and Emergency Account Management",
        "controlText": "Automatically [Selection: remove; disable] temporary and emergency accounts after [Assignment: organization-defined time period for each type of account].",
        "discussion": "Management of temporary and emergency accounts includes the removal or disabling of such accounts automatically after a predefined time period rather than at the convenience of the system administrator. Automatic removal or disabling of accounts provides a more consistent implementation.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-2(4)",
        "controlName": "Account Management | Automated Audit Actions",
        "controlText": "Automatically audit account creation, modification, enabling, disabling, and removal actions.",
        "discussion": "Account management audit records are defined in accordance with AU-2 and reviewed, analyzed, and reported in accordance with AU-6.",
        "relatedControls": "AU-2, AU-6."
    },
    {
        "controlIdentifier": "AC-2(5)",
        "controlName": "Account Management | Inactivity Logout",
        "controlText": "Require that users log out when [Assignment: organization-defined time period of expected inactivity or description of when to log out].",
        "discussion": "Inactivity logout is behavior- or policy-based and requires users to take physical action to log out when they are expecting inactivity longer than the defined period. Automatic enforcement of inactivity logout is addressed by AC-11.",
        "relatedControls": "AC-11."
    },
    {
        "controlIdentifier": "AC-2(6)",
        "controlName": "Account Management | Dynamic Privilege Management",
        "controlText": "Implement [Assignment: organization-defined dynamic privilege management capabilities].",
        "discussion": "In contrast to access control approaches that employ static accounts and predefined user privileges, dynamic access control approaches rely on runtime access control decisions facilitated by dynamic privilege management, such as attribute-based access control. While user identities remain relatively constant over time, user privileges typically change more frequently based on ongoing mission or business requirements and the operational needs of organizations. An example of dynamic privilege management is the immediate revocation of privileges from users as opposed to requiring that users terminate and restart their sessions to reflect changes in privileges. Dynamic privilege management can also include mechanisms that change user privileges based on dynamic rules as opposed to editing specific user profiles. Examples include automatic adjustments of user privileges if they are operating out of their normal work times, if their job function or assignment changes, or if systems are under duress or in emergency situations. Dynamic privilege management includes the effects of privilege changes, for example, when there are changes to encryption keys used for communications.",
        "relatedControls": "AC-16."
    },
    {
        "controlIdentifier": "AC-2(8)",
        "controlName": "Account Management | Dynamic Account Management",
        "controlText": "Create, activate, manage, and deactivate [Assignment: organization-defined system accounts] dynamically.",
        "discussion": "Approaches for dynamically creating, activating, managing, and deactivating system accounts rely on automatically provisioning the accounts at runtime for entities that were previously unknown. Organizations plan for the dynamic management, creation, activation, and deactivation of system accounts by establishing trust relationships, business rules, and mechanisms with appropriate authorities to validate related authorizations and privileges.",
        "relatedControls": "AC-16."
    },
    {
        "controlIdentifier": "AC-2(9)",
        "controlName": "Account Management | Restrictions on Use of Shared and Group Accounts",
        "controlText": "Only permit the use of shared and group accounts that meet [Assignment: organization-defined conditions for establishing shared and group accounts].",
        "discussion": "Before permitting the use of shared or group accounts, organizations consider the increased risk due to the lack of accountability with such accounts.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-13",
        "controlName": "Supervision and Review — Access Control",
        "controlText": "[Withdrawn: Incorporated into AC-2 and AU-6.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "AC-2(11)",
        "controlName": "Account Management | Usage Conditions",
        "controlText": "Enforce [Assignment: organization-defined circumstances and/or usage conditions] for  [Assignment: organization-defined system accounts].",
        "discussion": "Specifying and enforcing usage conditions helps to enforce the principle of least privilege, increase user accountability, and enable effective account monitoring. Account monitoring includes alerts generated if the account is used in violation of organizational parameters. Organizations can describe specific conditions or circumstances under which system accounts can be used, such as by restricting usage to certain days of the week, time of day, or specific durations of time.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-2(12)",
        "controlName": "Account Management | Account Monitoring for Atypical Usage",
        "controlText": "\"(a) Monitor system accounts for [Assignment: organization-defined atypical usage]; and"
    },
    {
        "controlIdentifier": "(b) Report atypical usage of system accounts to [Assignment: organization-defined personnel or roles].\"",
        "controlName": "Atypical usage includes accessing systems at certain times of the day or from locations that are not consistent with the normal usage patterns of individuals. Monitoring for atypical usage may reveal rogue behavior by individuals or an attack in progress. Account monitoring may inadvertently create privacy risks since data collected to identify atypical usage may reveal previously unknown information about the behavior of individuals. Organizations assess and document privacy risks from monitoring accounts for atypical usage in their privacy impact assessment and make determinations that are in alignment with their privacy program plan.",
        "controlText": "AU-6, AU-7, CA-7, IR-8, SI-4."
    },
    {
        "controlIdentifier": "AC-2(13)",
        "controlName": "Account Management | Disable Accounts for High-risk Individuals",
        "controlText": "Disable accounts of individuals within [Assignment: organization-defined time period] of discovery of [Assignment: organization-defined significant risks].",
        "discussion": "Users who pose a significant security and/or privacy risk include individuals for whom reliable evidence indicates either the intention to use authorized access to systems to cause harm or through whom adversaries will cause harm. Such harm includes adverse impacts to organizational operations, organizational assets, individuals, other organizations, or the Nation. Close coordination among system administrators, legal staff, human resource managers, and authorizing officials is essential when disabling system accounts for high-risk individuals.",
        "relatedControls": "AU-6, SI-4."
    },
    {
        "controlIdentifier": "AC-3",
        "controlName": "Access Enforcement",
        "controlText": "Enforce approved authorizations for logical access to information and system resources in accordance with applicable access control policies.",
        "discussion": "Access control policies control access between active entities or subjects (i.e., users or processes acting on behalf of users) and passive entities or objects (i.e., devices, files, records, domains) in organizational systems. In addition to enforcing authorized access at the system level and recognizing that systems can host many applications and services in support of mission and business functions, access enforcement mechanisms can also be employed at the application and service level to provide increased information security and privacy. In contrast to logical access controls that are implemented within the system, physical access controls are addressed by the controls in the Physical and Environmental Protection (PE) family.",
        "relatedControls": "AC-2, AC-4, AC-5, AC-6, AC-16, AC-17, AC-18, AC-19, AC-20, AC-21, AC-22, AC-24, AC-25, AT-2, AT-3, AU-9, CA-9, CM-5, CM-11, IA-2, IA-5, IA-6, IA-7, IA-11, MA-3, MA-4, MA-5, MP-4, PM-2, PS-3, PT-2, PT-3, SA-17, SC-2, SC-3, SC-4, SC-12, SC-13, SC-28, SC-31, SC-34, SI-4, SI-8."
    },
    {
        "controlIdentifier": "AC-14(1)",
        "controlName": "Permitted Actions Without Identification or Authentication | Necessary Uses",
        "controlText": "[Withdrawn: Incorporated into AC-14.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "AC-3(2)",
        "controlName": "Access Enforcement | Dual Authorization",
        "controlText": "Enforce dual authorization for [Assignment: organization-defined privileged commands and/or other organization-defined actions].",
        "discussion": "Dual authorization, also known as two-person control, reduces risk related to insider threats. Dual authorization mechanisms require the approval of two authorized individuals to execute. To reduce the risk of collusion, organizations consider rotating dual authorization duties. Organizations consider the risk associated with implementing dual authorization mechanisms when immediate responses are necessary to ensure public and environmental safety.",
        "relatedControls": "CP-9, MP-6."
    },
    {
        "controlIdentifier": "AC-3(5)",
        "controlName": "Access Enforcement | Security-relevant Information",
        "controlText": "Prevent access to [Assignment: organization-defined security-relevant information] except during secure, non-operable system states.",
        "discussion": "Security-relevant information is information within systems that can potentially impact the operation of security functions or the provision of security services in a manner that could result in failure to enforce system security and privacy policies or maintain the separation of code and data. Security-relevant information includes access control lists, filtering rules for routers or firewalls, configuration parameters for security services, and cryptographic key management information. Secure, non-operable system states include the times in which systems are not performing mission or business-related processing, such as when the system is offline for maintenance, boot-up, troubleshooting, or shut down.",
        "relatedControls": "CM-6, SC-39."
    },
    {
        "controlIdentifier": "AC-15",
        "controlName": "Automated Marking",
        "controlText": "[Withdrawn: Incorporated into MP-3.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "AC-3(7)",
        "controlName": "Access Enforcement | Role-based Access Control",
        "controlText": "Enforce a role-based access control policy over defined subjects and objects and control access based upon [Assignment: organization-defined roles and users authorized to assume such roles].",
        "discussion": "Role-based access control (RBAC) is an access control policy that enforces access to objects and system functions based on the defined role (i.e., job function) of the subject. Organizations can create specific roles based on job functions and the authorizations (i.e., privileges) to perform needed operations on the systems associated with the organization-defined roles. When users are assigned to specific roles, they inherit the authorizations or privileges defined for those roles. RBAC simplifies privilege administration for organizations because privileges are not assigned directly to every user (which can be a large number of individuals) but are instead acquired through role assignments. RBAC can also increase privacy and security risk if individuals assigned to a role are given access to information beyond what they need to support organizational missions or business functions. RBAC can be implemented as a mandatory or discretionary form of access control. For organizations implementing RBAC with mandatory access controls, the requirements in AC-3(3) define the scope of the subjects and objects covered by the policy.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-3(8)",
        "controlName": "Access Enforcement | Revocation of Access Authorizations",
        "controlText": "Enforce the revocation of access authorizations resulting from changes to the security attributes of subjects and objects based on [Assignment: organization-defined rules governing the timing of revocations of access authorizations].",
        "discussion": "Revocation of access rules may differ based on the types of access revoked. For example, if a subject (i.e., user or process acting on behalf of a user) is removed from a group, access may not be revoked until the next time the object is opened or the next time the subject attempts to access the object. Revocation based on changes to security labels may take effect immediately. Organizations provide alternative approaches on how to make revocations immediate if systems cannot provide such capability and immediate revocation is necessary.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-3(10)",
        "controlName": "Access Enforcement | Audited Override of Access Control Mechanisms",
        "controlText": "Employ an audited override of automated access control mechanisms under [Assignment: organization-defined conditions] by [Assignment: organization-defined roles].",
        "discussion": "In certain situations, such as when there is a threat to human life or an event that threatens the organization’s ability to carry out critical missions or business functions, an override capability for access control mechanisms may be needed. Override conditions are defined by organizations and used only in those limited circumstances. Audit events are defined in AU-2. Audit records are generated in AU-12.",
        "relatedControls": "AU-2, AU-6, AU-10, AU-12, AU-14."
    },
    {
        "controlIdentifier": "AC-3(11)",
        "controlName": "Access Enforcement | Restrict Access to Specific Information Types",
        "controlText": "Restrict access to data repositories containing [Assignment: organization-defined information types].",
        "discussion": "Restricting access to specific information is intended to provide flexibility regarding access control of specific information types within a system. For example, role-based access could be employed to allow access to only a specific type of personally identifiable information within a database rather than allowing access to the database in its entirety. Other examples include restricting access to cryptographic keys, authentication information, and selected system information.",
        "relatedControls": "CM-8, CM-12, CM-13, PM-5."
    },
    {
        "controlIdentifier": "AC-3(13)",
        "controlName": "Access Enforcement | Attribute-based Access Control",
        "controlText": "Enforce attribute-based access control policy over defined subjects and objects and control access based upon [Assignment: organization-defined attributes to assume access permissions].",
        "discussion": "Attribute-based access control is an access control policy that restricts system access to authorized users based on specified organizational attributes (e.g., job function, identity), action attributes (e.g., read, write, delete), environmental attributes (e.g., time of day, location), and resource attributes (e.g., classification of a document). Organizations can create rules based on attributes and the authorizations (i.e., privileges) to perform needed operations on the systems associated with organization-defined attributes and rules. When users are assigned to attributes defined in attribute-based access control policies or rules, they can be provisioned to a system with the appropriate privileges or dynamically granted access to a protected resource. Attribute-based access control can be implemented as either a mandatory or discretionary form of access control. When implemented with mandatory access controls, the requirements in AC-3(3) define the scope of the subjects and objects covered by the policy.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-3(14)",
        "controlName": "Access Enforcement | Individual Access",
        "controlText": "Provide [Assignment: organization-defined mechanisms] to enable individuals to have access to the following elements of their personally identifiable information: [Assignment: organization-defined elements].",
        "discussion": "Individual access affords individuals the ability to review personally identifiable information about them held within organizational records, regardless of format. Access helps individuals to develop an understanding about how their personally identifiable information is being processed. It can also help individuals ensure that their data is accurate. Access mechanisms can include request forms and application interfaces. For federal agencies, PRIVACT processes can be located in systems of record notices and on agency websites. Access to certain types of records may not be appropriate (e.g., for federal agencies, law enforcement records within a system of records may be exempt from disclosure under the PRIVACT) or may require certain levels of authentication assurance. Organizational personnel consult with the senior agency official for privacy and legal counsel to determine appropriate mechanisms and access rights or limitations.",
        "relatedControls": "IA-8, PM-22, PM-20, PM-21, PT-6."
    },
    {
        "controlIdentifier": "AC-4(1)",
        "controlName": "Information Flow Enforcement | Object Security and Privacy Attributes",
        "controlText": "Use [Assignment: organization-defined security and privacy attributes] associated with [Assignment: organization-defined information, source, and destination objects] to enforce [Assignment: organization-defined information flow control policies] as a basis for flow control decisions.",
        "discussion": "Information flow enforcement mechanisms compare security and privacy attributes associated with information (i.e., data content and structure) and source and destination objects and respond appropriately when the enforcement mechanisms encounter information flows not explicitly allowed by information flow policies. For example, an information object labeled Secret would be allowed to flow to a destination object labeled Secret, but an information object labeled Top Secret would not be allowed to flow to a destination object labeled Secret. A dataset of personally identifiable information may be tagged with restrictions against combining with other types of datasets and, thus, would not be allowed to flow to the restricted dataset. Security and privacy attributes can also include source and destination addresses employed in traffic filter firewalls. Flow enforcement using explicit security or privacy attributes can be used, for example, to control the release of certain types of information.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-4(2)",
        "controlName": "Information Flow Enforcement | Processing Domains",
        "controlText": "Use protected processing domains to enforce [Assignment: organization-defined information flow control policies] as a basis for flow control decisions.",
        "discussion": "Protected processing domains within systems are processing spaces that have controlled interactions with other processing spaces, enabling control of information flows between these spaces and to/from information objects. A protected processing domain can be provided, for example, by implementing domain and type enforcement. In domain and type enforcement, system processes are assigned to domains, information is identified by types, and information flows are controlled based on allowed information accesses (i.e., determined by domain and type), allowed signaling among domains, and allowed process transitions to other domains.",
        "relatedControls": "SC-39."
    },
    {
        "controlIdentifier": "AC-4(3)",
        "controlName": "Information Flow Enforcement | Dynamic Information Flow Control",
        "controlText": "Enforce [Assignment: organization-defined information flow control policies].",
        "discussion": "Organizational policies regarding dynamic information flow control include allowing or disallowing information flows based on changing conditions or mission or operational considerations. Changing conditions include changes in risk tolerance due to changes in the immediacy of mission or business needs, changes in the threat environment, and detection of potentially harmful or adverse events.",
        "relatedControls": "SI-4."
    },
    {
        "controlIdentifier": "AC-4(4)",
        "controlName": "Information Flow Enforcement | Flow Control of Encrypted Information",
        "controlText": "Prevent encrypted information from bypassing [Assignment: organization-defined information flow control mechanisms] by [Selection (one or more): decrypting the information; blocking the flow of the encrypted information; terminating communications sessions attempting to pass encrypted information; [Assignment: organization-defined procedure or method]].",
        "discussion": "Flow control mechanisms include content checking, security policy filters, and data type identifiers. The term encryption is extended to cover encoded data not recognized by filtering mechanisms.",
        "relatedControls": "SI-4."
    },
    {
        "controlIdentifier": "AC-4(5)",
        "controlName": "Information Flow Enforcement | Embedded Data Types",
        "controlText": "Enforce [Assignment: organization-defined limitations] on embedding data types within other data types.",
        "discussion": "Embedding data types within other data types may result in reduced flow control effectiveness. Data type embedding includes inserting files as objects within other files and using compressed or archived data types that may include multiple embedded data types. Limitations on data type embedding consider the levels of embedding and prohibit levels of data type embedding that are beyond the capability of the inspection tools.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-4(6)",
        "controlName": "Information Flow Enforcement | Metadata",
        "controlText": "Enforce information flow control based on [Assignment: organization-defined metadata].",
        "discussion": "Metadata is information that describes the characteristics of data. Metadata can include structural metadata describing data structures or descriptive metadata describing data content. Enforcement of allowed information flows based on metadata enables simpler and more effective flow control. Organizations consider the trustworthiness of metadata regarding data accuracy (i.e., knowledge that the metadata values are correct with respect to the data), data integrity (i.e., protecting against unauthorized changes to metadata tags), and the binding of metadata to the data payload (i.e., employing sufficiently strong binding techniques with appropriate assurance).",
        "relatedControls": "AC-16, SI-7."
    },
    {
        "controlIdentifier": "AC-4(7)",
        "controlName": "Information Flow Enforcement | One-way Flow Mechanisms",
        "controlText": "Enforce one-way information flows through hardware-based flow control mechanisms.",
        "discussion": "One-way flow mechanisms may also be referred to as a unidirectional network, unidirectional security gateway, or data diode. One-way flow mechanisms can be used to prevent data from being exported from a higher impact or classified domain or system while permitting data from a lower impact or unclassified domain or system to be imported.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-4(9)",
        "controlName": "Information Flow Enforcement | Human Reviews",
        "controlText": "Enforce the use of human reviews for [Assignment: organization-defined information flows] under the following conditions: [Assignment: organization-defined conditions].",
        "discussion": "Organizations define security or privacy policy filters for all situations where automated flow control decisions are possible. When a fully automated flow control decision is not possible, then a human review may be employed in lieu of or as a complement to automated security or privacy policy filtering. Human reviews may also be employed as deemed necessary by organizations.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-4(10)",
        "controlName": "Information Flow Enforcement | Enable and Disable Security or Privacy Policy Filters",
        "controlText": "Provide the capability for privileged administrators to enable and disable [Assignment: organization-defined security or privacy policy filters] under the following conditions: [Assignment: organization-defined conditions].",
        "discussion": "For example, as allowed by the system authorization, administrators can enable security or privacy policy filters to accommodate approved data types. Administrators also have the capability to select the filters that are executed on a specific data flow based on the type of data that is being transferred, the source and destination security domains, and other security or privacy relevant features, as needed.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-4(11)",
        "controlName": "Information Flow Enforcement | Configuration of Security or Privacy Policy Filters",
        "controlText": "Provide the capability for privileged administrators to configure [Assignment: organization-defined security or privacy policy filters] to support different security or privacy policies.",
        "discussion": "Documentation contains detailed information for configuring security or privacy policy filters. For example, administrators can configure security or privacy policy filters to include the list of inappropriate words that security or privacy policy mechanisms check in accordance with the definitions provided by organizations.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-4(12)",
        "controlName": "Information Flow Enforcement | Data Type Identifiers",
        "controlText": "When transferring information between different security domains, use [Assignment: organization-defined data type identifiers] to validate data essential for information flow decisions.",
        "discussion": "Data type identifiers include filenames, file types, file signatures or tokens, and multiple internal file signatures or tokens. Systems only allow transfer of data that is compliant with data type format specifications. Identification and validation of data types is based on defined specifications associated with each allowed data format. The filename and number alone are not used for data type identification. Content is validated syntactically and semantically against its specification to ensure that it is the proper data type.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-4(13)",
        "controlName": "Information Flow Enforcement | Decomposition into Policy-relevant Subcomponents",
        "controlText": "When transferring information between different security domains, decompose information into [Assignment: organization-defined policy-relevant subcomponents] for submission to policy enforcement mechanisms.",
        "discussion": "Decomposing information into policy-relevant subcomponents prior to information transfer facilitates policy decisions on source, destination, certificates, classification, attachments, and other security- or privacy-related component differentiators. Policy enforcement mechanisms apply filtering, inspection, and/or sanitization rules to the policy-relevant subcomponents of information to facilitate flow enforcement prior to transferring such information to different security domains.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-4(14)",
        "controlName": "Information Flow Enforcement | Security or Privacy Policy Filter Constraints",
        "controlText": "When transferring information between different security domains, implement [Assignment: organization-defined security or privacy policy filters] requiring fully enumerated formats that restrict data structure and content.",
        "discussion": "Data structure and content restrictions reduce the range of potential malicious or unsanctioned content in cross-domain transactions. Security or privacy policy filters that restrict data structures include restricting file sizes and field lengths. Data content policy filters include encoding formats for character sets, restricting character data fields to only contain alpha-numeric characters, prohibiting special characters, and validating schema structures.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-4(15)",
        "controlName": "Information Flow Enforcement | Detection of Unsanctioned Information",
        "controlText": "When transferring information between different security domains, examine the information for the presence of [Assignment: organization-defined unsanctioned information] and prohibit the transfer of such information in accordance with the [Assignment: organization-defined security or privacy policy].",
        "discussion": "Unsanctioned information includes malicious code, information that is inappropriate for release from the source network, or executable code that could disrupt or harm the services or systems on the destination network.",
        "relatedControls": "SI-3."
    },
    {
        "controlIdentifier": "AC-17(5)",
        "controlName": "Remote Access | Monitoring for Unauthorized Connections",
        "controlText": "[Withdrawn: Incorporated into SI-4.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "AC-4(17)",
        "controlName": "Information Flow Enforcement | Domain Authentication",
        "controlText": "Uniquely identify and authenticate source and destination points by [Selection (one or more): organization; system; application; service; individual] for information transfer.",
        "discussion": "Attribution is a critical component of a security and privacy concept of operations. The ability to identify source and destination points for information flowing within systems allows the forensic reconstruction of events and encourages policy compliance by attributing policy violations to specific organizations or individuals. Successful domain authentication requires that system labels distinguish among systems, organizations, and individuals involved in preparing, sending, receiving, or disseminating information. Attribution also allows organizations to better maintain the lineage of personally identifiable information processing as it flows through systems and can facilitate consent tracking, as well as correction, deletion, or access requests from individuals.",
        "relatedControls": "IA-2, IA-3, IA-9."
    },
    {
        "controlIdentifier": "AC-17(7)",
        "controlName": "Remote Access | Additional Protection for Security Function Access",
        "controlText": "[Withdrawn: Incorporated into AC-3(10).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "AC-4(19)",
        "controlName": "Information Flow Enforcement | Validation of Metadata",
        "controlText": "When transferring information between different security domains, implement [Assignment: organization-defined security or privacy policy filters] on metadata.",
        "discussion": "All information (including metadata and the data to which the metadata applies) is subject to filtering and inspection. Some organizations distinguish between metadata and data payloads (i.e., only the data to which the metadata is bound). Other organizations do not make such distinctions and consider metadata and the data to which the metadata applies to be part of the payload.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-4(20)",
        "controlName": "Information Flow Enforcement | Approved Solutions",
        "controlText": "Employ [Assignment: organization-defined solutions in approved configurations] to control the flow of [Assignment: organization-defined information] across security domains.",
        "discussion": "Organizations define approved solutions and configurations in cross-domain policies and guidance in accordance with the types of information flows across classification boundaries. The National Security Agency (NSA) National Cross Domain Strategy and Management Office provides a listing of approved cross-domain solutions. Contact ncdsmo@nsa.gov for more information.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-4(21)",
        "controlName": "Information Flow Enforcement | Physical or Logical Separation of Information Flows",
        "controlText": "Separate information flows logically or physically using [Assignment: organization-defined mechanisms and/or techniques] to accomplish [Assignment: organization-defined required separations by types of information].",
        "discussion": "Enforcing the separation of information flows associated with defined types of data can enhance protection by ensuring that information is not commingled while in transit and by enabling flow control by transmission paths that are not otherwise achievable. Types of separable information include inbound and outbound communications traffic, service requests and responses, and information of differing security impact or classification levels.",
        "relatedControls": "SC-32."
    },
    {
        "controlIdentifier": "AC-4(22)",
        "controlName": "Information Flow Enforcement | Access Only",
        "controlText": "Provide access from a single device to computing platforms, applications, or data residing in multiple different security domains, while preventing information flow between the different security domains.",
        "discussion": "The system provides a capability for users to access each connected security domain without providing any mechanisms to allow users to transfer data or information between the different security domains. An example of an access-only solution is a terminal that provides a user access to information with different security classifications while assuredly keeping the information separate.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-4(23)",
        "controlName": "Information Flow Enforcement | Modify Non-releasable Information",
        "controlText": "When transferring information between different security domains, modify non-releasable information by implementing [Assignment: organization-defined modification action].",
        "discussion": "Modifying non-releasable information can help prevent a data spill or attack when information is transferred across security domains. Modification actions include masking, permutation, alteration, removal, or redaction.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-4(24)",
        "controlName": "Information Flow Enforcement | Internal Normalized Format",
        "controlText": "When transferring information between different security domains, parse incoming data into an internal normalized format and regenerate the data to be consistent with its intended specification.",
        "discussion": "Converting data into normalized forms is one of most of effective mechanisms to stop malicious attacks and large classes of data exfiltration.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-4(25)",
        "controlName": "Information Flow Enforcement | Data Sanitization",
        "controlText": "When transferring information between different security domains, sanitize data to minimize [Selection (one or more): delivery of malicious content, command and control of malicious code, malicious code augmentation, and steganography encoded data; spillage of sensitive information] in accordance with [Assignment: organization-defined policy]].",
        "discussion": "Data sanitization is the process of irreversibly removing or destroying data stored on a memory device (e.g., hard drives, flash memory/solid state drives, mobile devices, CDs, and DVDs) or in hard copy form.",
        "relatedControls": "MP-6."
    },
    {
        "controlIdentifier": "AC-4(26)",
        "controlName": "Information Flow Enforcement | Audit Filtering Actions",
        "controlText": "When transferring information between different security domains, record and audit content filtering actions and results for the information being filtered.",
        "discussion": "Content filtering is the process of inspecting information as it traverses a cross-domain solution and determines if the information meets a predefined policy. Content filtering actions and the results of filtering actions are recorded for individual messages to ensure that the correct filter actions were applied. Content filter reports are used to assist in troubleshooting actions by, for example, determining why message content was modified and/or why it failed the filtering process. Audit events are defined in AU-2. Audit records are generated in AU-12.",
        "relatedControls": "AU-2, AU-3, AU-12."
    },
    {
        "controlIdentifier": "AC-4(27)",
        "controlName": "Information Flow Enforcement | Redundant/independent Filtering Mechanisms",
        "controlText": "When transferring information between different security domains, implement content filtering solutions that provide redundant and independent filtering mechanisms for each data type.",
        "discussion": "Content filtering is the process of inspecting information as it traverses a cross-domain solution and determines if the information meets a predefined policy. Redundant and independent content filtering eliminates a single point of failure filtering system. Independence is defined as the implementation of a content filter that uses a different code base and supporting libraries (e.g., two JPEG filters using different vendors’ JPEG libraries) and multiple, independent system processes.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-4(28)",
        "controlName": "Information Flow Enforcement | Linear Filter Pipelines",
        "controlText": "When transferring information between different security domains, implement a linear content filter pipeline that is enforced with discretionary and mandatory access controls.",
        "discussion": "Content filtering is the process of inspecting information as it traverses a cross-domain solution and determines if the information meets a predefined policy. The use of linear content filter pipelines ensures that filter processes are non-bypassable and always invoked. In general, the use of parallel filtering architectures for content filtering of a single data type introduces bypass and non-invocation issues.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-4(30)",
        "controlName": "Information Flow Enforcement | Filter Mechanisms Using Multiple Processes",
        "controlText": "When transferring information between different security domains, implement content filtering mechanisms using multiple processes.",
        "discussion": "The use of multiple processes to implement content filtering mechanisms reduces the likelihood of a single point of failure.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-4(31)",
        "controlName": "Information Flow Enforcement | Failed Content Transfer Prevention",
        "controlText": "When transferring information between different security domains, prevent the transfer of failed content to the receiving domain.",
        "discussion": "Content that failed filtering checks can corrupt the system if transferred to the receiving domain.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-6",
        "controlName": "Least Privilege",
        "controlText": "Employ the principle of least privilege, allowing only authorized accesses for users (or processes acting on behalf of users) that are necessary to accomplish assigned organizational tasks.",
        "discussion": "Organizations employ least privilege for specific duties and systems. The principle of least privilege is also applied to system processes, ensuring that the processes have access to systems and operate at privilege levels no higher than necessary to accomplish organizational missions or business functions. Organizations consider the creation of additional processes, roles, and accounts as necessary to achieve least privilege. Organizations apply least privilege to the development, implementation, and operation of organizational systems.",
        "relatedControls": "AC-2, AC-3, AC-5, AC-16, CM-5, CM-11, PL-2, PM-12, SA-8, SA-15, SA-17, SC-38."
    },
    {
        "controlIdentifier": "AC-6(2)",
        "controlName": "Least Privilege | Non-privileged Access for Nonsecurity Functions",
        "controlText": "Require that users of system accounts (or roles) with access to [Assignment: organization-defined security functions or security-relevant information] use non-privileged accounts or roles, when accessing nonsecurity functions.",
        "discussion": "Requiring the use of non-privileged accounts when accessing nonsecurity functions limits exposure when operating from within privileged accounts or roles. The inclusion of roles addresses situations where organizations implement access control policies, such as role-based access control, and where a change of role provides the same degree of assurance in the change of access authorizations for the user and the processes acting on behalf of the user as would be provided by a change between a privileged and non-privileged account.",
        "relatedControls": "AC-17, AC-18, AC-19, PL-4."
    },
    {
        "controlIdentifier": "AC-6(3)",
        "controlName": "Least Privilege | Network Access to Privileged Commands",
        "controlText": "Authorize network access to [Assignment: organization-defined privileged commands] only for [Assignment: organization-defined compelling operational needs] and document the rationale for such access in the security plan for the system.",
        "discussion": "Network access is any access across a network connection in lieu of local access (i.e., user being physically present at the device).",
        "relatedControls": "AC-17, AC-18, AC-19."
    },
    {
        "controlIdentifier": "AC-6(4)",
        "controlName": "Least Privilege | Separate Processing Domains",
        "controlText": "Provide separate processing domains to enable finer-grained allocation of user privileges.",
        "discussion": "Providing separate processing domains for finer-grained allocation of user privileges includes using virtualization techniques to permit additional user privileges within a virtual machine while restricting privileges to other virtual machines or to the underlying physical machine, implementing separate physical domains, and employing hardware or software domain separation mechanisms.",
        "relatedControls": "AC-4, SC-2, SC-3, SC-30, SC-32, SC-39."
    },
    {
        "controlIdentifier": "AC-6(5)",
        "controlName": "Least Privilege | Privileged Accounts",
        "controlText": "Restrict privileged accounts on the system to [Assignment: organization-defined personnel or roles].",
        "discussion": "Privileged accounts, including super user accounts, are typically described as system administrator for various types of commercial off-the-shelf operating systems. Restricting privileged accounts to specific personnel or roles prevents day-to-day users from accessing privileged information or privileged functions. Organizations may differentiate in the application of restricting privileged accounts between allowed privileges for local accounts and for domain accounts provided that they retain the ability to control system configurations for key parameters and as otherwise necessary to sufficiently mitigate risk.",
        "relatedControls": "IA-2, MA-3, MA-4."
    },
    {
        "controlIdentifier": "AC-6(6)",
        "controlName": "Least Privilege | Privileged Access by Non-organizational Users",
        "controlText": "Prohibit privileged access to the system by non-organizational users.",
        "discussion": "An organizational user is an employee or an individual considered by the organization to have the equivalent status of an employee. Organizational users include contractors, guest researchers, or individuals detailed from other organizations. A non-organizational user is a user who is not an organizational user. Policies and procedures for granting equivalent status of employees to individuals include a need-to-know, citizenship, and the relationship to the organization.",
        "relatedControls": "AC-18, AC-19, IA-2, IA-8."
    },
    {
        "controlIdentifier": "AC-6(8)",
        "controlName": "Least Privilege | Privilege Levels for Code Execution",
        "controlText": "Prevent the following software from executing at higher privilege levels than users executing the software: [Assignment: organization-defined software].",
        "discussion": "In certain situations, software applications or programs need to execute with elevated privileges to perform required functions. However, depending on the software functionality and configuration, if the privileges required for execution are at a higher level than the privileges assigned to organizational users invoking such applications or programs, those users may indirectly be provided with greater privileges than assigned.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-6(9)",
        "controlName": "Least Privilege | Log Use of Privileged Functions",
        "controlText": "Log the execution of privileged functions.",
        "discussion": "The misuse of privileged functions, either intentionally or unintentionally by authorized users or by unauthorized external entities that have compromised system accounts, is a serious and ongoing concern and can have significant adverse impacts on organizations. Logging and analyzing the use of privileged functions is one way to detect such misuse and, in doing so, help mitigate the risk from insider threats and the advanced persistent threat.",
        "relatedControls": "AU-2, AU-3, AU-12."
    },
    {
        "controlIdentifier": "AC-6(10)",
        "controlName": "Least Privilege | Prohibit Non-privileged Users from Executing Privileged Functions",
        "controlText": "Prevent non-privileged users from executing privileged functions.",
        "discussion": "Privileged functions include disabling, circumventing, or altering implemented security or privacy controls, establishing system accounts, performing system integrity checks, and administering cryptographic key management activities. Non-privileged users are individuals who do not possess appropriate authorizations. Privileged functions that require protection from non-privileged users include circumventing intrusion detection and prevention mechanisms or malicious code protection mechanisms. Preventing non-privileged users from executing privileged functions is enforced by AC-3.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-17(8)",
        "controlName": "Remote Access | Disable Nonsecure Network Protocols",
        "controlText": "[Withdrawn: Incorporated into CM-7.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "AC-7(2)",
        "controlName": "Unsuccessful Logon Attempts | Purge or Wipe Mobile Device",
        "controlText": "Purge or wipe information from [Assignment: organization-defined mobile devices] based on [Assignment: organization-defined purging or wiping requirements and techniques] after [Assignment: organization-defined number] consecutive, unsuccessful device logon attempts.",
        "discussion": "A mobile device is a computing device that has a small form factor such that it can be carried by a single individual; is designed to operate without a physical connection; possesses local, non-removable or removable data storage; and includes a self-contained power source. Purging or wiping the device applies only to mobile devices for which the organization-defined number of unsuccessful logons occurs. The logon is to the mobile device, not to any one account on the device. Successful logons to accounts on mobile devices reset the unsuccessful logon count to zero. Purging or wiping may be unnecessary if the information on the device is protected with sufficiently strong encryption mechanisms.",
        "relatedControls": "AC-19, MP-5, MP-6."
    },
    {
        "controlIdentifier": "AC-7(3)",
        "controlName": "Unsuccessful Logon Attempts | Biometric Attempt Limiting",
        "controlText": "Limit the number of unsuccessful biometric logon attempts to [Assignment: organization-defined number].",
        "discussion": "Biometrics are probabilistic in nature. The ability to successfully authenticate can be impacted by many factors, including matching performance and presentation attack detection mechanisms. Organizations select the appropriate number of attempts for users based on organizationally-defined factors.",
        "relatedControls": "IA-3."
    },
    {
        "controlIdentifier": "AC-9",
        "controlName": "Previous Logon Notification",
        "controlText": "Notify the user, upon successful logon to the system, of the date and time of the last logon.",
        "discussion": "Previous logon notification is applicable to system access via human user interfaces and access to systems that occurs in other types of architectures. Information about the last successful logon allows the user to recognize if the date and time provided is not consistent with the user’s last access.",
        "relatedControls": "AC-7, PL-4."
    },
    {
        "controlIdentifier": "AC-9(1)",
        "controlName": "Previous Logon Notification | Unsuccessful Logons",
        "controlText": "Notify the user, upon successful logon, of the number of unsuccessful logon attempts since the last successful logon.",
        "discussion": "Information about the number of unsuccessful logon attempts since the last successful logon allows the user to recognize if the number of unsuccessful logon attempts is consistent with the user’s actual logon attempts.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-9(2)",
        "controlName": "Previous Logon Notification | Successful and Unsuccessful Logons",
        "controlText": "Notify the user, upon successful logon, of the number of [Selection: successful logons; unsuccessful logon attempts; both] during [Assignment: organization-defined time period].",
        "discussion": "Information about the number of successful and unsuccessful logon attempts within a specified time period allows the user to recognize if the number and type of logon attempts are consistent with the user’s actual logon attempts.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-9(3)",
        "controlName": "Previous Logon Notification | Notification of Account Changes",
        "controlText": "Notify the user, upon successful logon, of changes to [Assignment: organization-defined security-related characteristics or parameters of the user’s account] during [Assignment: organization-defined time period].",
        "discussion": "Information about changes to security-related account characteristics within a specified time period allows users to recognize if changes were made without their knowledge.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-9(4)",
        "controlName": "Previous Logon Notification | Additional Logon Information",
        "controlText": "Notify the user, upon successful logon, of the following additional information: [Assignment: organization-defined additional information].",
        "discussion": "Organizations can specify additional information to be provided to users upon logon, including the location of the last logon. User location is defined as information that can be determined by systems, such as Internet Protocol (IP) addresses from which network logons occurred, notifications of local logons, or device identifiers.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-10",
        "controlName": "Concurrent Session Control",
        "controlText": "Limit the number of concurrent sessions for each [Assignment: organization-defined account and/or account type] to [Assignment: organization-defined number].",
        "discussion": "Organizations may define the maximum number of concurrent sessions for system accounts globally, by account type, by account, or any combination thereof. For example, organizations may limit the number of concurrent sessions for system administrators or other individuals working in particularly sensitive domains or mission-critical applications. Concurrent session control addresses concurrent sessions for system accounts. It does not, however, address concurrent sessions by single users via multiple system accounts.",
        "relatedControls": "SC-23."
    },
    {
        "controlIdentifier": "AC-11(1)",
        "controlName": "Device Lock | Pattern-hiding Displays",
        "controlText": "Conceal, via the device lock, information previously visible on the display with a publicly viewable image.",
        "discussion": "The pattern-hiding display can include static or dynamic images, such as patterns used with screen savers, photographic images, solid colors, clock, battery life indicator, or a blank screen with the caveat that controlled unclassified information is not displayed.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-12",
        "controlName": "Session Termination",
        "controlText": "Automatically terminate a user session after [Assignment: organization-defined conditions or trigger events requiring session disconnect].",
        "discussion": "Session termination addresses the termination of user-initiated logical sessions (in contrast to SC-10, which addresses the termination of network connections associated with communications sessions (i.e., network disconnect)). A logical session (for local, network, and remote access) is initiated whenever a user (or process acting on behalf of a user) accesses an organizational system. Such user sessions can be terminated without terminating network sessions. Session termination ends all processes associated with a user’s logical session except for those processes that are specifically created by the user (i.e., session owner) to continue after the session is terminated. Conditions or trigger events that require automatic termination of the session include organization-defined periods of user inactivity, targeted responses to certain types of incidents, or time-of-day restrictions on system use.",
        "relatedControls": "MA-4, SC-10, SC-23."
    },
    {
        "controlIdentifier": "AC-12(1)",
        "controlName": "Session Termination | User-initiated Logouts",
        "controlText": "Provide a logout capability for user-initiated communications sessions whenever authentication is used to gain access to [Assignment: organization-defined information resources].",
        "discussion": "Information resources to which users gain access via authentication include local workstations, databases, and password-protected websites or web-based services.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-12(2)",
        "controlName": "Session Termination | Termination Message",
        "controlText": "Display an explicit logout message to users indicating the termination of authenticated communications sessions.",
        "discussion": "Logout messages for web access can be displayed after authenticated sessions have been terminated. However, for certain types of sessions, including file transfer protocol (FTP) sessions, systems typically send logout messages as final messages prior to terminating sessions.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-12(3)",
        "controlName": "Session Termination | Timeout Warning Message",
        "controlText": "Display an explicit message to users indicating that the session will end in [Assignment: organization-defined time until end of session].",
        "discussion": "To increase usability, notify users of pending session termination and prompt users to continue the session. The pending session termination time period is based on the parameters defined in the AC-12 base control.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-18(2)",
        "controlName": "Wireless Access | Monitoring Unauthorized Connections",
        "controlText": "[Withdrawn: Incorporated into SI-4.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "AC-19(1)",
        "controlName": "Access Control for Mobile Devices | Use of Writable and Portable Storage Devices",
        "controlText": "[Withdrawn: Incorporated into MP-7.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "AC-19(2)",
        "controlName": "Access Control for Mobile Devices | Use of Personally Owned Portable Storage Devices",
        "controlText": "[Withdrawn: Incorporated into MP-7.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "AC-16(1)",
        "controlName": "Security and Privacy Attributes | Dynamic Attribute Association",
        "controlText": "Dynamically associate security and privacy attributes with [Assignment: organization-defined subjects and objects] in accordance with the following security and privacy policies as information is created and combined: [Assignment: organization-defined security and privacy policies].",
        "discussion": "Dynamic association of attributes is appropriate whenever the security or privacy characteristics of information change over time. Attributes may change due to information aggregation issues (i.e., characteristics of individual data elements are different from the combined elements), changes in individual access authorizations (i.e., privileges), changes in the security category of information, or changes in security or privacy policies. Attributes may also change situationally.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-16(2)",
        "controlName": "Security and Privacy Attributes | Attribute Value Changes by Authorized Individuals",
        "controlText": "Provide authorized individuals (or processes acting on behalf of individuals) the capability to define or change the value of associated security and privacy attributes.",
        "discussion": "The content or assigned values of attributes can directly affect the ability of individuals to access organizational information. Therefore, it is important for systems to be able to limit the ability to create or modify attributes to authorized individuals.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-16(3)",
        "controlName": "Security and Privacy Attributes | Maintenance of Attribute Associations by System",
        "controlText": "Maintain the association and integrity of [Assignment: organization-defined security and privacy attributes] to [Assignment: organization-defined subjects and objects].",
        "discussion": "Maintaining the association and integrity of security and privacy attributes to subjects and objects with sufficient assurance helps to ensure that the attribute associations can be used as the basis of automated policy actions. The integrity of specific items, such as security configuration files, may be maintained through the use of an integrity monitoring mechanism that detects anomalies and changes that deviate from known good baselines. Automated policy actions include retention date expirations, access control decisions, information flow control decisions, and information disclosure decisions.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-16(4)",
        "controlName": "Security and Privacy Attributes | Association of Attributes by Authorized Individuals",
        "controlText": "Provide the capability to associate [Assignment: organization-defined security and privacy attributes] with [Assignment: organization-defined subjects and objects] by authorized individuals (or processes acting on behalf of individuals).",
        "discussion": "Systems, in general, provide the capability for privileged users to assign security and privacy attributes to system-defined subjects (e.g., users) and objects (e.g., directories, files, and ports). Some systems provide additional capability for general users to assign security and privacy attributes to additional objects (e.g., files, emails). The association of attributes by authorized individuals is described in the design documentation. The support provided by systems can include prompting users to select security and privacy attributes to be associated with information objects, employing automated mechanisms to categorize information with attributes based on defined policies, or ensuring that the combination of the security or privacy attributes selected is valid. Organizations consider the creation, deletion, or modification of attributes when defining auditable events.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-16(5)",
        "controlName": "Security and Privacy Attributes | Attribute Displays on Objects to Be Output",
        "controlText": "Display security and privacy attributes in human-readable form on each object that the system transmits to output devices to identify [Assignment: organization-defined special dissemination, handling, or distribution instructions] using [Assignment: organization-defined human-readable, standard naming conventions].",
        "discussion": "System outputs include printed pages, screens, or equivalent items. System output devices include printers, notebook computers, video displays, smart phones, and tablets. To mitigate the risk of unauthorized exposure of information (e.g., shoulder surfing), the outputs display full attribute values when unmasked by the subscriber.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-16(6)",
        "controlName": "Security and Privacy Attributes | Maintenance of Attribute Association",
        "controlText": "Require personnel to associate and maintain the association of [Assignment: organization-defined security and privacy attributes] with [Assignment: organization-defined subjects and objects] in accordance with [Assignment: organization-defined security and privacy policies].",
        "discussion": "Maintaining attribute association requires individual users (as opposed to the system) to maintain associations of defined security and privacy attributes with subjects and objects.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-16(7)",
        "controlName": "Security and Privacy Attributes | Consistent Attribute Interpretation",
        "controlText": "Provide a consistent interpretation of security and privacy attributes transmitted between distributed system components.",
        "discussion": "To enforce security and privacy policies across multiple system components in distributed systems, organizations provide a consistent interpretation of security and privacy attributes employed in access enforcement and flow enforcement decisions. Organizations can establish agreements and processes to help ensure that distributed system components implement attributes with consistent interpretations in automated access enforcement and flow enforcement actions.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-16(8)",
        "controlName": "Security and Privacy Attributes | Association Techniques and Technologies",
        "controlText": "Implement [Assignment: organization-defined techniques and technologies] in associating security and privacy attributes to information.",
        "discussion": " The association of security and privacy attributes to information within systems is important for conducting automated access enforcement and flow enforcement actions. The association of such attributes to information (i.e., binding) can be accomplished with technologies and techniques that provide different levels of assurance. For example, systems can cryptographically bind attributes to information using digital signatures that support cryptographic keys protected by hardware devices (sometimes known as hardware roots of trust).",
        "relatedControls": "SC-12, SC-13."
    },
    {
        "controlIdentifier": "AC-16(9)",
        "controlName": "Security and Privacy Attributes | Attribute Reassignment — Regrading Mechanisms",
        "controlText": "Change security and privacy attributes associated with information only via regrading mechanisms validated using [Assignment: organization-defined techniques or procedures].",
        "discussion": "A regrading mechanism is a trusted process authorized to re-classify and re-label data in accordance with a defined policy exception. Validated regrading mechanisms are used by organizations to provide the requisite levels of assurance for attribute reassignment activities. The validation is facilitated by ensuring that regrading mechanisms are single purpose and of limited function. Since security and privacy attribute changes can directly affect policy enforcement actions, implementing trustworthy regrading mechanisms is necessary to help ensure that such mechanisms perform in a consistent and correct mode of operation.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-16(10)",
        "controlName": "Security and Privacy Attributes | Attribute Configuration by Authorized Individuals",
        "controlText": "Provide authorized individuals the capability to define or change the type and value of security and privacy attributes available for association with subjects and objects.",
        "discussion": "The content or assigned values of security and privacy attributes can directly affect the ability of individuals to access organizational information. Thus, it is important for systems to be able to limit the ability to create or modify the type and value of attributes available for association with subjects and objects to authorized individuals only.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-17(1)",
        "controlName": "Remote Access | Monitoring and Control",
        "controlText": "Employ automated mechanisms to monitor and control remote access methods.",
        "discussion": "Monitoring and control of remote access methods allows organizations to detect attacks and help ensure compliance with remote access policies by auditing the connection activities of remote users on a variety of system components, including servers, notebook computers, workstations, smart phones, and tablets. Audit logging for remote access is enforced by AU-2. Audit events are defined in AU-2a.",
        "relatedControls": "AU-2, AU-6, AU-12, AU-14."
    },
    {
        "controlIdentifier": "AC-17(2)",
        "controlName": "Remote Access | Protection of Confidentiality and Integrity Using Encryption",
        "controlText": "Implement cryptographic mechanisms to protect the confidentiality and integrity of remote access sessions.",
        "discussion": "Virtual private networks can be used to protect the confidentiality and integrity of remote access sessions. Transport Layer Security (TLS) is an example of a cryptographic protocol that provides end-to-end communications security over networks and is used for Internet communications and online transactions.",
        "relatedControls": "SC-8, SC-12, SC-13."
    },
    {
        "controlIdentifier": "AC-17(3)",
        "controlName": "Remote Access | Managed Access Control Points",
        "controlText": "Route remote accesses through authorized and managed network access control points.",
        "discussion": "Organizations consider the Trusted Internet Connections (TIC) initiative DHS TIC requirements for external network connections since limiting the number of access control points for remote access reduces attack surfaces.",
        "relatedControls": "SC-7."
    },
    {
        "controlIdentifier": "AC-19(3)",
        "controlName": "Access Control for Mobile Devices | Use of Portable Storage Devices with No Identifiable Owner",
        "controlText": "[Withdrawn: Incorporated into MP-7.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "AC-17(6)",
        "controlName": "Remote Access | Protection of Mechanism Information",
        "controlText": "Protect information about remote access mechanisms from unauthorized use and disclosure.",
        "discussion": "Remote access to organizational information by non-organizational entities can increase the risk of unauthorized use and disclosure about remote access mechanisms. The organization considers including remote access requirements in the information exchange agreements with other organizations, as applicable. Remote access requirements can also be included in rules of behavior (see PL-4) and access agreements (see PS-6).",
        "relatedControls": "AT-2, AT-3, PS-6."
    },
    {
        "controlIdentifier": "AC-2(10)",
        "controlName": "Account Management | Shared and Group Account Credential Change",
        "controlText": "[Withdrawn: Incorporated into AC-2k.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "AC-3(1)",
        "controlName": "Access Enforcement | Restricted Access to Privileged Functions",
        "controlText": "[Withdrawn: Incorporated into AC-6.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "AC-17(9)",
        "controlName": "Remote Access | Disconnect or Disable Access",
        "controlText": "Provide the capability to disconnect or disable remote access to the system within [Assignment: organization-defined time period].",
        "discussion": "The speed of system disconnect or disablement varies based on the criticality of missions or business functions and the need to eliminate immediate or future remote access to systems.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-17(10)",
        "controlName": "Remote Access | Authenticate Remote Commands",
        "controlText": "Implement [Assignment: organization-defined mechanisms] to authenticate [Assignment: organization-defined remote commands].",
        "discussion": "Authenticating remote commands protects against unauthorized commands and the replay of authorized commands. The ability to authenticate remote commands is important for remote systems for which loss, malfunction, misdirection, or exploitation would have immediate or serious consequences, such as injury, death, property damage, loss of high value assets, failure of mission or business functions, or compromise of classified or controlled unclassified information. Authentication mechanisms for remote commands ensure that systems accept and execute commands in the order intended, execute only authorized commands, and reject unauthorized commands. Cryptographic mechanisms can be used, for example, to authenticate remote commands.",
        "relatedControls": "SC-12, SC-13, SC-23."
    },
    {
        "controlIdentifier": "AC-18(1)",
        "controlName": "Wireless Access | Authentication and Encryption",
        "controlText": "Protect wireless access to the system using authentication of [Selection (one or more): users; devices] and encryption.",
        "discussion": "Wireless networking capabilities represent a significant potential vulnerability that can be exploited by adversaries. To protect systems with wireless access points, strong authentication of users and devices along with strong encryption can reduce susceptibility to threats by adversaries involving wireless technologies.",
        "relatedControls": "SC-8, SC-12, SC-13."
    },
    {
        "controlIdentifier": "AC-3(6)",
        "controlName": "Access Enforcement | Protection of User and System Information",
        "controlText": "[Withdrawn: Incorporated into MP-4 and SC-28.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "AC-18(3)",
        "controlName": "Wireless Access | Disable Wireless Networking",
        "controlText": "Disable, when not intended for use, wireless networking capabilities embedded within system components prior to issuance and deployment.",
        "discussion": "Wireless networking capabilities that are embedded within system components represent a significant potential vulnerability that can be exploited by adversaries. Disabling wireless capabilities when not needed for essential organizational missions or functions can reduce susceptibility to threats by adversaries involving wireless technologies.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-18(4)",
        "controlName": "Wireless Access | Restrict Configurations by Users",
        "controlText": "Identify and explicitly authorize users allowed to independently configure wireless networking capabilities.",
        "discussion": "Organizational authorizations to allow selected users to configure wireless networking capabilities are enforced, in part, by the access enforcement mechanisms employed within organizational systems.",
        "relatedControls": "SC-7, SC-15."
    },
    {
        "controlIdentifier": "AC-18(5)",
        "controlName": "Wireless Access | Antennas and Transmission Power Levels",
        "controlText": "Select radio antennas and calibrate transmission power levels to reduce the probability that signals from wireless access points can be received outside of organization-controlled boundaries.",
        "discussion": "Actions that may be taken to limit unauthorized use of wireless communications outside of organization-controlled boundaries include reducing the power of wireless transmissions so that the transmissions are less likely to emit a signal that can be captured outside of the physical perimeters of the organization, employing measures such as emissions security to control wireless emanations, and using directional or beamforming antennas that reduce the likelihood that unintended receivers will be able to intercept signals. Prior to taking such mitigating actions, organizations can conduct periodic wireless surveys to understand the radio frequency profile of organizational systems as well as other systems that may be operating in the area.",
        "relatedControls": "PE-19."
    },
    {
        "controlIdentifier": "AC-4(16)",
        "controlName": "Information Flow Enforcement | Information Transfers on Interconnected Systems",
        "controlText": "[Withdrawn: Incorporated into AC-4.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "AC-4(18)",
        "controlName": "Information Flow Enforcement | Security Attribute Binding",
        "controlText": "[Withdrawn: Incorporated into AC-16.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "AC-7(1)",
        "controlName": "Unsuccessful Logon Attempts | Automatic Account Lock",
        "controlText": "[Withdrawn: Incorporated into AC-7.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "AC-19(5)",
        "controlName": "Access Control for Mobile Devices | Full Device or Container-based Encryption",
        "controlText": "Employ [Selection: full-device encryption; container-based encryption] to protect the confidentiality and integrity of information on [Assignment: organization-defined mobile devices].",
        "discussion": "Container-based encryption provides a more fine-grained approach to data and information encryption on mobile devices, including encrypting selected data structures such as files, records, or fields.",
        "relatedControls": "SC-12, SC-13, SC-28."
    },
    {
        "controlIdentifier": "AC-20(2)",
        "controlName": "Use of External Systems | Portable Storage Devices — Restricted Use",
        "controlText": "Restrict the use of organization-controlled portable storage devices by authorized individuals on external systems using [Assignment: organization-defined restrictions].",
        "discussion": "Limits on the use of organization-controlled portable storage devices in external systems include restrictions on how the devices may be used and under what conditions the devices may be used.",
        "relatedControls": "MP-7, SC-41."
    },
    {
        "controlIdentifier": "AC-20(3)",
        "controlName": "Use of External Systems | Non-organizationally Owned Systems — Restricted Use",
        "controlText": "Restrict the use of non-organizationally owned systems or system components to process, store, or transmit organizational information using [Assignment: organization-defined restrictions].",
        "discussion": "Non-organizationally owned systems or system components include systems or system components owned by other organizations as well as personally owned devices. There are potential risks to using non-organizationally owned systems or components. In some cases, the risk is sufficiently high as to prohibit such use (see AC-20 b.). In other cases, the use of such systems or system components may be allowed but restricted in some way. Restrictions include requiring the implementation of approved controls prior to authorizing the connection of non-organizationally owned systems and components; limiting access to types of information, services, or applications; using virtualization techniques to limit processing and storage activities to servers or system components provisioned by the organization; and agreeing to the terms and conditions for usage. Organizations consult with the Office of the General Counsel regarding legal issues associated with using personally owned devices, including requirements for conducting forensic analyses during investigations after an incident.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-20(4)",
        "controlName": "Use of External Systems | Network Accessible Storage Devices — Prohibited Use",
        "controlText": "Prohibit the use of [Assignment: organization-defined network accessible storage devices] in external systems.",
        "discussion": "Network-accessible storage devices in external systems include online storage devices in public, hybrid, or community cloud-based systems.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-20(5)",
        "controlName": "Use of External Systems | Portable Storage Devices — Prohibited Use",
        "controlText": "Prohibit the use of organization-controlled portable storage devices by authorized individuals on external systems.",
        "discussion": "Limits on the use of organization-controlled portable storage devices in external systems include a complete prohibition of the use of such devices. Prohibiting such use is enforced using technical methods and/or nontechnical (i.e., process-based) methods.",
        "relatedControls": "MP-7, PL-4, PS-6, SC-41."
    },
    {
        "controlIdentifier": "AC-21(1)",
        "controlName": "Information Sharing | Automated Decision Support",
        "controlText": "Employ [Assignment: organization-defined automated mechanisms] to enforce information-sharing decisions by authorized users based on access authorizations of sharing partners and access restrictions on information to be shared.",
        "discussion": "Automated mechanisms are used to enforce information sharing decisions.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-21(2)",
        "controlName": "Information Sharing | Information Search and Retrieval",
        "controlText": "Implement information search and retrieval services that enforce [Assignment: organization-defined information sharing restrictions].",
        "discussion": "Information search and retrieval services identify information system resources relevant to an information need.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-24",
        "controlName": "Access Control Decisions",
        "controlText": "[Selection: Establish procedures; Implement mechanisms] to ensure [Assignment: organization-defined access control decisions] are applied to each access request prior to access enforcement.",
        "discussion": "Access control decisions (also known as authorization decisions) occur when authorization information is applied to specific accesses. In contrast, access enforcement occurs when systems enforce access control decisions. While it is common to have access control decisions and access enforcement implemented by the same entity, it is not required, and it is not always an optimal implementation choice. For some architectures and distributed systems, different entities may make access control decisions and enforce access.",
        "relatedControls": "AC-2, AC-3."
    },
    {
        "controlIdentifier": "AC-24(1)",
        "controlName": "Access Control Decisions | Transmit Access Authorization Information",
        "controlText": "Transmit [Assignment: organization-defined access authorization information] using [Assignment: organization-defined controls] to [Assignment: organization-defined systems] that enforce access control decisions.",
        "discussion": "Authorization processes and access control decisions may occur in separate parts of systems or in separate systems. In such instances, authorization information is transmitted securely (e.g., using cryptographic mechanisms) so that timely access control decisions can be enforced at the appropriate locations. To support the access control decisions, it may be necessary to transmit as part of the access authorization information supporting security and privacy attributes. This is because in distributed systems, there are various access control decisions that need to be made, and different entities make these decisions in a serial fashion, each requiring those attributes to make the decisions. Protecting access authorization information ensures that such information cannot be altered, spoofed, or compromised during transmission.",
        "relatedControls": "AU-10."
    },
    {
        "controlIdentifier": "AC-24(2)",
        "controlName": "Access Control Decisions | No User or Process Identity",
        "controlText": "Enforce access control decisions based on [Assignment: organization-defined security or privacy attributes] that do not include the identity of the user or process acting on behalf of the user.",
        "discussion": "In certain situations, it is important that access control decisions can be made without information regarding the identity of the users issuing the requests. These are generally instances where preserving individual privacy is of paramount importance. In other situations, user identification information is simply not needed for access control decisions, and especially in the case of distributed systems, transmitting such information with the needed degree of assurance may be very expensive or difficult to accomplish. MAC, RBAC, ABAC, and label-based control policies, for example, might not include user identity as an attribute.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AC-25",
        "controlName": "Reference Monitor",
        "controlText": "Implement a reference monitor for [Assignment: organization-defined access control policies] that is tamperproof, always invoked, and small enough to be subject to analysis and testing, the completeness of which can be assured.",
        "discussion": "A reference monitor is a set of design requirements on a reference validation mechanism that, as a key component of an operating system, enforces an access control policy over all subjects and objects. A reference validation mechanism is always invoked, tamper-proof, and small enough to be subject to analysis and tests, the completeness of which can be assured (i.e., verifiable). Information is represented internally within systems using abstractions known as data structures. Internal data structures can represent different types of entities, both active and passive. Active entities, also known as subjects, are associated with individuals, devices, or processes acting on behalf of individuals. Passive entities, also known as objects, are associated with data structures, such as records, buffers, communications ports, tables, files, and inter-process pipes. Reference monitors enforce access control policies that restrict access to objects based on the identity of subjects or groups to which the subjects belong. The system enforces the access control policy based on the rule set established by the policy. The tamper-proof property of the reference monitor prevents determined adversaries from compromising the functioning of the reference validation mechanism. The always invoked property prevents adversaries from bypassing the mechanism and violating the security policy. The smallness property helps to ensure completeness in the analysis and testing of the mechanism to detect any weaknesses or deficiencies (i.e., latent flaws) that would prevent the enforcement of the security policy.",
        "relatedControls": "AC-3, AC-16, SA-8, SA-17, SC-3, SC-11, SC-39, SI-13."
    },
    {
        "controlIdentifier": "AT-3(1)",
        "controlName": "Role-based Training | Environmental Controls",
        "controlText": "Provide [Assignment: organization-defined personnel or roles] with initial and [Assignment: organization-defined frequency] training in the employment and operation of environmental controls.",
        "discussion": "Environmental controls include fire suppression and detection devices or systems, sprinkler systems, handheld fire extinguishers, fixed fire hoses, smoke detectors, temperature or humidity, heating, ventilation, air conditioning, and power within the facility.",
        "relatedControls": "PE-1, PE-11, PE-13, PE-14, PE-15."
    },
    {
        "controlIdentifier": "AT-3(2)",
        "controlName": "Role-based Training | Physical Security Controls",
        "controlText": "Provide [Assignment: organization-defined personnel or roles] with initial and [Assignment: organization-defined frequency] training in the employment and operation of physical security controls.",
        "discussion": "Physical security controls include physical access control devices, physical intrusion and detection alarms, operating procedures for facility security guards, and monitoring or surveillance equipment.",
        "relatedControls": "PE-2, PE-3, PE-4."
    },
    {
        "controlIdentifier": "AT-3(3)",
        "controlName": "Role-based Training | Practical Exercises",
        "controlText": "Provide practical exercises in security and privacy training that reinforce training objectives.",
        "discussion": "Practical exercises for security include training for software developers that addresses simulated attacks that exploit common software vulnerabilities or spear or whale phishing attacks targeted at senior leaders or executives. Practical exercises for privacy include modules with quizzes on identifying and processing personally identifiable information in various scenarios or scenarios on conducting privacy impact assessments.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AT-3(4)",
        "controlName": "Role-based Training | Suspicious Communications and Anomalous System Behavior",
        "controlText": "[Withdrawn: Moved to AT-2(4)].",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "AT-3(5)",
        "controlName": "Role-based Training | Processing Personally Identifiable Information",
        "controlText": "Provide [Assignment: organization-defined personnel or roles] with initial and [Assignment: organization-defined frequency] training in the employment and operation of personally identifiable information processing and transparency controls.",
        "discussion": "Personally identifiable information processing and transparency controls include the organization’s authority to process personally identifiable information and personally identifiable information processing purposes. Role-based training for federal agencies addresses the types of information that may constitute personally identifiable information and the risks, considerations, and obligations associated with its processing. Such training also considers the authority to process personally identifiable information documented in privacy policies and notices, system of records notices, computer matching agreements and notices, privacy impact assessments, PRIVACT statements, contracts, information sharing agreements, memoranda of understanding, and/or other documentation.",
        "relatedControls": "PT-2, PT-3, PT-5, PT-6."
    },
    {
        "controlIdentifier": "AT-5",
        "controlName": "Contacts with Security Groups and Associations",
        "controlText": "[Withdrawn: Incorporated into PM-15.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "AT-6",
        "controlName": "Training Feedback",
        "controlText": "Provide feedback on organizational training results to the following personnel [Assignment: organization-defined frequency]: [Assignment: organization-defined personnel].",
        "discussion": "Training feedback includes awareness training results and role-based training results. Training results, especially failures of personnel in critical roles, can be indicative of a potentially serious problem. Therefore, it is important that senior managers are made aware of such situations so that they can take appropriate response actions. Training feedback supports the evaluation and update of organizational training described in AT-2b and AT-3b.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AU-10(5)",
        "controlName": "Non-repudiation | Digital Signatures",
        "controlText": "[Withdrawn: Incorporated into SI-7.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "AU-14(2)",
        "controlName": "Session Audit | Capture and Record Content",
        "controlText": "[Withdrawn: Incorporated into AU-14.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "AU-15",
        "controlName": "Alternate Audit Logging Capability",
        "controlText": "[Withdrawn: Moved to AU-5(5).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "AU-2(1)",
        "controlName": "Event Logging | Compilation of Audit Records from Multiple Sources",
        "controlText": "[Withdrawn: Incorporated into AU-12.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "AU-3(1)",
        "controlName": "Content of Audit Records | Additional Audit Information",
        "controlText": "Generate audit records containing the following additional information: [Assignment: organization-defined additional information].",
        "discussion": "The ability to add information generated in audit records is dependent on system functionality to configure the audit record content. Organizations may consider additional information in audit records including, but not limited to, access control or flow control rules invoked and individual identities of group account users. Organizations may also consider limiting additional audit record information to only information that is explicitly needed for audit requirements. This facilitates the use of audit trails and audit logs by not including information in audit records that could potentially be misleading, make it more difficult to locate information of interest, or increase the risk to individuals' privacy.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AU-2(2)",
        "controlName": "Event Logging | Selection of Audit Events by Component",
        "controlText": "[Withdrawn: Incorporated into AU-12.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "AU-3(3)",
        "controlName": "Content of Audit Records | Limit Personally Identifiable Information Elements",
        "controlText": "Limit personally identifiable information contained in audit records to the following elements identified in the privacy risk assessment: [Assignment: organization-defined elements].",
        "discussion": "Limiting personally identifiable information in audit records when such information is not needed for operational purposes helps reduce the level of privacy risk created by a system.",
        "relatedControls": "RA-3."
    },
    {
        "controlIdentifier": "AU-4",
        "controlName": "Audit Log Storage Capacity",
        "controlText": "Allocate audit log storage capacity to accommodate [Assignment: organization-defined audit log retention requirements].",
        "discussion": "Organizations consider the types of audit logging to be performed and the audit log processing requirements when allocating audit log storage capacity. Allocating sufficient audit log storage capacity reduces the likelihood of such capacity being exceeded and resulting in the potential loss or reduction of audit logging capability.",
        "relatedControls": "AU-2, AU-5, AU-6, AU-7, AU-9, AU-11, AU-12, AU-14, SI-4."
    },
    {
        "controlIdentifier": "AU-4(1)",
        "controlName": "Audit Log Storage Capacity | Transfer to Alternate Storage",
        "controlText": "Transfer audit logs [Assignment: organization-defined frequency] to a different system, system component, or media other than the system or system component conducting the logging.",
        "discussion": "Audit log transfer, also known as off-loading, is a common process in systems with limited audit log storage capacity and thus supports availability of the audit logs. The initial audit log storage is only used in a transitory fashion until the system can communicate with the secondary or alternate system allocated to audit log storage, at which point the audit logs are transferred. Transferring audit logs to alternate storage is similar to AU-9(2) in that audit logs are transferred to a different entity. However, the purpose of selecting AU-9(2) is to protect the confidentiality and integrity of audit records. Organizations can select either control enhancement to obtain the benefit of increased audit log storage capacity and preserving the confidentiality, integrity, and availability of audit records and logs.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AU-5(1)",
        "controlName": "Response to Audit Logging Process Failures | Storage Capacity Warning",
        "controlText": "Provide a warning to [Assignment: organization-defined personnel, roles, and/or locations] within [Assignment: organization-defined time period] when allocated audit log storage volume reaches [Assignment: organization-defined percentage] of repository maximum audit log storage capacity.",
        "discussion": "Organizations may have multiple audit log storage repositories distributed across multiple system components with each repository having different storage volume capacities.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AU-5(2)",
        "controlName": "Response to Audit Logging Process Failures | Real-time Alerts",
        "controlText": "Provide an alert within [Assignment: organization-defined real-time period] to [Assignment: organization-defined personnel, roles, and/or locations] when the following audit failure events occur: [Assignment: organization-defined audit logging failure events requiring real-time alerts].",
        "discussion": "Alerts provide organizations with urgent messages. Real-time alerts provide these messages at information technology speed (i.e., the time from event detection to alert occurs in seconds or less).",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AU-5(3)",
        "controlName": "Response to Audit Logging Process Failures | Configurable Traffic Volume Thresholds",
        "controlText": "Enforce configurable network communications traffic volume thresholds reflecting limits on audit log storage capacity and [Selection: reject; delay] network traffic above those thresholds.",
        "discussion": "Organizations have the capability to reject or delay the processing of network communications traffic if audit logging information about such traffic is determined to exceed the storage capacity of the system audit logging function. The rejection or delay response is triggered by the established organizational traffic volume thresholds that can be adjusted based on changes to audit log storage capacity.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AU-5(4)",
        "controlName": "Response to Audit Logging Process Failures | Shutdown on Failure",
        "controlText": "Invoke a [Selection: full system shutdown; partial system shutdown; degraded operational mode with limited mission or business functionality available] in the event of [Assignment: organization-defined audit logging failures], unless an alternate audit logging capability exists.",
        "discussion": "Organizations determine the types of audit logging failures that can trigger automatic system shutdowns or degraded operations. Because of the importance of ensuring mission and business continuity, organizations may determine that the nature of the audit logging failure is not so severe that it warrants a complete shutdown of the system supporting the core organizational mission and business functions. In those instances, partial system shutdowns or operating in a degraded mode with reduced capability may be viable alternatives.",
        "relatedControls": "AU-15."
    },
    {
        "controlIdentifier": "AU-5(5)",
        "controlName": "Response to Audit Logging Process Failures | Alternate Audit Logging Capability",
        "controlText": "Provide an alternate audit logging capability in the event of a failure in primary audit logging capability that implements [Assignment: organization-defined alternate audit logging functionality].",
        "discussion": "Since an alternate audit logging capability may be a short-term protection solution employed until the failure in the primary audit logging capability is corrected, organizations may determine that the alternate audit logging capability need only provide a subset of the primary audit logging functionality that is impacted by the failure.",
        "relatedControls": "AU-9."
    },
    {
        "controlIdentifier": "AU-6(1)",
        "controlName": "Audit Record Review, Analysis, and Reporting | Automated Process Integration",
        "controlText": "Integrate audit record review, analysis, and reporting processes using [Assignment: organization-defined automated mechanisms].",
        "discussion": "Organizational processes that benefit from integrated audit record review, analysis, and reporting include incident response, continuous monitoring, contingency planning, investigation and response to suspicious activities, and Inspector General audits.",
        "relatedControls": "PM-7."
    },
    {
        "controlIdentifier": "AU-2(3)",
        "controlName": "Event Logging | Reviews and Updates",
        "controlText": "[Withdrawn: Incorporated into AU-2.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "AU-6(3)",
        "controlName": "Audit Record Review, Analysis, and Reporting | Correlate Audit Record Repositories",
        "controlText": "Analyze and correlate audit records across different repositories to gain organization-wide situational awareness.",
        "discussion": "Organization-wide situational awareness includes awareness across all three levels of risk management (i.e., organizational level, mission/business process level, and information system level) and supports cross-organization awareness.",
        "relatedControls": "AU-12, IR-4."
    },
    {
        "controlIdentifier": "AU-6(4)",
        "controlName": "Audit Record Review, Analysis, and Reporting | Central Review and Analysis",
        "controlText": "Provide and implement the capability to centrally review and analyze audit records from multiple components within the system.",
        "discussion": "Automated mechanisms for centralized reviews and analyses include Security Information and Event Management products.",
        "relatedControls": "AU-2, AU-12."
    },
    {
        "controlIdentifier": "AU-6(5)",
        "controlName": "Audit Record Review, Analysis, and Reporting | Integrated Analysis of Audit Records",
        "controlText": "Integrate analysis of audit records with analysis of [Selection (one or more): vulnerability scanning information; performance data; system monitoring information; [Assignment: organization-defined data/information collected from other sources]] to further enhance the ability to identify inappropriate or unusual activity.",
        "discussion": "Integrated analysis of audit records does not require vulnerability scanning, the generation of performance data, or system monitoring. Rather, integrated analysis requires that the analysis of information generated by scanning, monitoring, or other data collection activities is integrated with the analysis of audit record information. Security Information and Event Management tools can facilitate audit record aggregation or consolidation from multiple system components as well as audit record correlation and analysis. The use of standardized audit record analysis scripts developed by organizations (with localized script adjustments, as necessary) provides more cost-effective approaches for analyzing audit record information collected. The correlation of audit record information with vulnerability scanning information is important in determining the veracity of vulnerability scans of the system and in correlating attack detection events with scanning results. Correlation with performance data can uncover denial-of-service attacks or other types of attacks that result in the unauthorized use of resources. Correlation with system monitoring information can assist in uncovering attacks and in better relating audit information to operational situations.",
        "relatedControls": "AU-12, IR-4."
    },
    {
        "controlIdentifier": "AU-6(6)",
        "controlName": "Audit Record Review, Analysis, and Reporting | Correlation with Physical Monitoring",
        "controlText": "Correlate information from audit records with information obtained from monitoring physical access to further enhance the ability to identify suspicious, inappropriate, unusual, or malevolent activity.",
        "discussion": "The correlation of physical audit record information and the audit records from systems may assist organizations in identifying suspicious behavior or supporting evidence of such behavior. For example, the correlation of an individual’s identity for logical access to certain systems with the additional physical security information that the individual was present at the facility when the logical access occurred may be useful in investigations.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AU-6(7)",
        "controlName": "Audit Record Review, Analysis, and Reporting | Permitted Actions",
        "controlText": "Specify the permitted actions for each [Selection (one or more): system process; role; user] associated with the review, analysis, and reporting of audit record information.",
        "discussion": "Organizations specify permitted actions for system processes, roles, and users associated with the review, analysis, and reporting of audit records through system account management activities. Specifying permitted actions on audit record information is a way to enforce the principle of least privilege. Permitted actions are enforced by the system and include read, write, execute, append, and delete.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AU-6(8)",
        "controlName": "Audit Record Review, Analysis, and Reporting | Full Text Analysis of Privileged Commands",
        "controlText": "Perform a full text analysis of logged privileged commands in a physically distinct component or subsystem of the system, or other system that is dedicated to that analysis.",
        "discussion": "Full text analysis of privileged commands requires a distinct environment for the analysis of audit record information related to privileged users without compromising such information on the system where the users have elevated privileges, including the capability to execute privileged commands. Full text analysis refers to analysis that considers the full text of privileged commands (i.e., commands and parameters) as opposed to analysis that considers only the name of the command. Full text analysis includes the use of pattern matching and heuristics.",
        "relatedControls": "AU-3, AU-9, AU-11, AU-12."
    },
    {
        "controlIdentifier": "AU-6(9)",
        "controlName": "Audit Record Review, Analysis, and Reporting | Correlation with Information from Nontechnical Sources",
        "controlText": "Correlate information from nontechnical sources with audit record information to enhance organization-wide situational awareness.",
        "discussion": "Nontechnical sources include records that document organizational policy violations related to harassment incidents and the improper use of information assets. Such information can lead to a directed analytical effort to detect potential malicious insider activity. Organizations limit access to information that is available from nontechnical sources due to its sensitive nature. Limited access minimizes the potential for inadvertent release of privacy-related information to individuals who do not have a need to know. The correlation of information from nontechnical sources with audit record information generally occurs only when individuals are suspected of being involved in an incident. Organizations obtain legal advice prior to initiating such actions.",
        "relatedControls": "PM-12."
    },
    {
        "controlIdentifier": "AU-2(4)",
        "controlName": "Event Logging | Privileged Functions",
        "controlText": "[Withdrawn: Incorporated into AC-6(9).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "AU-7(1)",
        "controlName": "Audit Record Reduction and Report Generation | Automatic Processing",
        "controlText": "Provide and implement the capability to process, sort, and search audit records for events of interest based on the following content: [Assignment: organization-defined fields within audit records].",
        "discussion": "Events of interest can be identified by the content of audit records, including system resources involved, information objects accessed, identities of individuals, event types, event locations, event dates and times, Internet Protocol addresses involved, or event success or failure. Organizations may define event criteria to any degree of granularity required, such as locations selectable by a general networking location or by specific system component.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AU-3(2)",
        "controlName": "Content of Audit Records | Centralized Management of Planned Audit Record Content",
        "controlText": "[Withdrawn: Incorporated into PL-9.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "AU-6(10)",
        "controlName": "Audit Record Review, Analysis, and Reporting | Audit Level Adjustment",
        "controlText": "[Withdrawn: Incorporated into AU-6.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "AU-6(2)",
        "controlName": "Audit Record Review, Analysis, and Reporting | Automated Security Alerts",
        "controlText": "[Withdrawn: Incorporated into SI-4.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "AU-9(1)",
        "controlName": "Protection of Audit Information | Hardware Write-once Media",
        "controlText": "Write audit trails to hardware-enforced, write-once media.",
        "discussion": "Writing audit trails to hardware-enforced, write-once media applies to the initial generation of audit trails (i.e., the collection of audit records that represents the information to be used for detection, analysis, and reporting purposes) and to the backup of those audit trails. Writing audit trails to hardware-enforced, write-once media does not apply to the initial generation of audit records prior to being written to an audit trail. Write-once, read-many (WORM) media includes Compact Disc-Recordable (CD-R), Blu-Ray Disc Recordable (BD-R), and Digital Versatile Disc-Recordable (DVD-R). In contrast, the use of switchable write-protection media, such as tape cartridges, Universal Serial Bus (USB) drives, Compact Disc Re-Writeable (CD-RW), and Digital Versatile Disc-Read Write (DVD-RW) results in write-protected but not write-once media.",
        "relatedControls": "AU-4, AU-5."
    },
    {
        "controlIdentifier": "AU-9(2)",
        "controlName": "Protection of Audit Information | Store on Separate Physical Systems or Components",
        "controlText": "Store audit records [Assignment: organization-defined frequency] in a repository that is part of a physically different system or system component than the system or component being audited.",
        "discussion": "Storing audit records in a repository separate from the audited system or system component helps to ensure that a compromise of the system being audited does not also result in a compromise of the audit records. Storing audit records on separate physical systems or components also preserves the confidentiality and integrity of audit records and facilitates the management of audit records as an organization-wide activity. Storing audit records on separate systems or components applies to initial generation as well as backup or long-term storage of audit records.",
        "relatedControls": "AU-4, AU-5."
    },
    {
        "controlIdentifier": "AU-9(3)",
        "controlName": "Protection of Audit Information | Cryptographic Protection",
        "controlText": "Implement cryptographic mechanisms to protect the integrity of audit information and audit tools.",
        "discussion": "Cryptographic mechanisms used for protecting the integrity of audit information include signed hash functions using asymmetric cryptography. This enables the distribution of the public key to verify the hash information while maintaining the confidentiality of the secret key used to generate the hash.",
        "relatedControls": "AU-10, SC-12, SC-13."
    },
    {
        "controlIdentifier": "AU-9(4)",
        "controlName": "Protection of Audit Information | Access by Subset of Privileged Users",
        "controlText": "Authorize access to management of audit logging functionality to only [Assignment: organization-defined subset of privileged users or roles].",
        "discussion": "Individuals or roles with privileged access to a system and who are also the subject of an audit by that system may affect the reliability of the audit information by inhibiting audit activities or modifying audit records. Requiring privileged access to be further defined between audit-related privileges and other privileges limits the number of users or roles with audit-related privileges.",
        "relatedControls": "AC-5."
    },
    {
        "controlIdentifier": "AU-9(5)",
        "controlName": "Protection of Audit Information | Dual Authorization",
        "controlText": "Enforce dual authorization for [Selection (one or more): movement; deletion] of [Assignment: organization-defined audit information].",
        "discussion": "Organizations may choose different selection options for different types of audit information. Dual authorization mechanisms (also known as two-person control) require the approval of two authorized individuals to execute audit functions. To reduce the risk of collusion, organizations consider rotating dual authorization duties to other individuals. Organizations do not require dual authorization mechanisms when immediate responses are necessary to ensure public and environmental safety.",
        "relatedControls": "AC-3."
    },
    {
        "controlIdentifier": "AU-9(6)",
        "controlName": "Protection of Audit Information | Read-only Access",
        "controlText": "Authorize read-only access to audit information to [Assignment: organization-defined subset of privileged users or roles].",
        "discussion": "Restricting privileged user or role authorizations to read-only helps to limit the potential damage to organizations that could be initiated by such users or roles, such as deleting audit records to cover up malicious activity.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AU-9(7)",
        "controlName": "Protection of Audit Information | Store on Component with Different Operating System",
        "controlText": "Store audit information on a component running a different operating system than the system or component being audited.",
        "discussion": "Storing auditing information on a system component running a different operating system reduces the risk of a vulnerability specific to the system, resulting in a compromise of the audit records.",
        "relatedControls": "AU-4, AU-5, AU-11, SC-29."
    },
    {
        "controlIdentifier": "AU-10",
        "controlName": "Non-repudiation",
        "controlText": "Provide irrefutable evidence that an individual (or process acting on behalf of an individual) has performed [Assignment: organization-defined actions to be covered by non-repudiation].",
        "discussion": "Types of individual actions covered by non-repudiation include creating information, sending and receiving messages, and approving information. Non-repudiation protects against claims by authors of not having authored certain documents, senders of not having transmitted messages, receivers of not having received messages, and signatories of not having signed documents. Non-repudiation services can be used to determine if information originated from an individual or if an individual took specific actions (e.g., sending an email, signing a contract, approving a procurement request, or receiving specific information). Organizations obtain non-repudiation services by employing various techniques or mechanisms, including digital signatures and digital message receipts.",
        "relatedControls": "AU-9, PM-12, SA-8, SC-8, SC-12, SC-13, SC-16, SC-17, SC-23."
    },
    {
        "controlIdentifier": "AU-10(3)",
        "controlName": "Non-repudiation | Chain of Custody",
        "controlText": "Maintain reviewer or releaser credentials within the established chain of custody for information reviewed or released.",
        "discussion": "Chain of custody is a process that tracks the movement of evidence through its collection, safeguarding, and analysis life cycle by documenting each individual who handled the evidence, the date and time the evidence was collected or transferred, and the purpose for the transfer. If the reviewer is a human or if the review function is automated but separate from the release or transfer function, the system associates the identity of the reviewer of the information to be released with the information and the information label. In the case of human reviews, maintaining the credentials of reviewers or releasers provides the organization with the means to identify who reviewed and released the information. In the case of automated reviews, it ensures that only approved review functions are used.",
        "relatedControls": "AC-4, AC-16."
    },
    {
        "controlIdentifier": "AU-7(2)",
        "controlName": "Audit Record Reduction and Report Generation | Automatic Sort and Search",
        "controlText": "[Withdrawn: Incorporated into AU-7(1).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "AU-11",
        "controlName": "Audit Record Retention",
        "controlText": "Retain audit records for [Assignment: organization-defined time period consistent with records retention policy] to provide support for after-the-fact investigations of incidents and to meet regulatory and organizational information retention requirements.",
        "discussion": "Organizations retain audit records until it is determined that the records are no longer needed for administrative, legal, audit, or other operational purposes. This includes the retention and availability of audit records relative to Freedom of Information Act (FOIA) requests, subpoenas, and law enforcement actions. Organizations develop standard categories of audit records relative to such types of actions and standard response processes for each type of action. The National Archives and Records Administration (NARA) General Records Schedules provide federal policy on records retention.",
        "relatedControls": "AU-2, AU-4, AU-5, AU-6, AU-9, AU-14, MP-6, RA-5, SI-12."
    },
    {
        "controlIdentifier": "AU-11(1)",
        "controlName": "Audit Record Retention | Long-term Retrieval Capability",
        "controlText": "Employ [Assignment: organization-defined measures] to ensure that long-term audit records generated by the system can be retrieved.",
        "discussion": "Organizations need to access and read audit records requiring long-term storage (on the order of years). Measures employed to help facilitate the retrieval of audit records include converting records to newer formats, retaining equipment capable of reading the records, and retaining the necessary documentation to help personnel understand how to interpret the records.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AU-12(1)",
        "controlName": "Audit Record Generation | System-wide and Time-correlated Audit Trail",
        "controlText": "Compile audit records from [Assignment: organization-defined system components] into a system-wide (logical or physical) audit trail that is time-correlated to within [Assignment: organization-defined level of tolerance for the relationship between time stamps of individual records in the audit trail].",
        "discussion": "Audit trails are time-correlated if the time stamps in the individual audit records can be reliably related to the time stamps in other audit records to achieve a time ordering of the records within organizational tolerances.",
        "relatedControls": "AU-8, SC-45."
    },
    {
        "controlIdentifier": "AU-12(2)",
        "controlName": "Audit Record Generation | Standardized Formats",
        "controlText": "Produce a system-wide (logical or physical) audit trail composed of audit records in a standardized format.",
        "discussion": "Audit records that follow common standards promote interoperability and information exchange between devices and systems. Promoting interoperability and information exchange facilitates the production of event information that can be readily analyzed and correlated. If logging mechanisms do not conform to standardized formats, systems may convert individual audit records into standardized formats when compiling system-wide audit trails.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AU-12(3)",
        "controlName": "Audit Record Generation | Changes by Authorized Individuals",
        "controlText": "Provide and implement the capability for [Assignment: organization-defined individuals or roles] to change the logging to be performed on [Assignment: organization-defined system components] based on [Assignment: organization-defined selectable event criteria] within [Assignment: organization-defined time thresholds].",
        "discussion": "Permitting authorized individuals to make changes to system logging enables organizations to extend or limit logging as necessary to meet organizational requirements. Logging that is limited to conserve system resources may be extended (either temporarily or permanently) to address certain threat situations. In addition, logging may be limited to a specific set of event types to facilitate audit reduction, analysis, and reporting. Organizations can establish time thresholds in which logging actions are changed (e.g., near real-time, within minutes, or within hours).",
        "relatedControls": "AC-3."
    },
    {
        "controlIdentifier": "AU-12(4)",
        "controlName": "Audit Record Generation | Query Parameter Audits of Personally Identifiable Information",
        "controlText": "Provide and implement the capability for auditing the parameters of user query events for data sets containing personally identifiable information.",
        "discussion": "Query parameters are explicit criteria that an individual or automated system submits to a system to retrieve data. Auditing of query parameters for datasets that contain personally identifiable information augments the capability of an organization to track and understand the access, usage, or sharing of personally identifiable information by authorized personnel.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AU-13(1)",
        "controlName": "Monitoring for Information Disclosure | Use of Automated Tools",
        "controlText": "Monitor open-source information and information sites using [Assignment: organization-defined automated mechanisms].",
        "discussion": "Automated mechanisms include commercial services that provide notifications and alerts to organizations and automated scripts to monitor new posts on websites.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AU-13(2)",
        "controlName": "Monitoring for Information Disclosure | Review of Monitored Sites",
        "controlText": "Review the list of open-source information sites being monitored [Assignment: organization-defined frequency].",
        "discussion": "Reviewing the current list of open-source information sites being monitored on a regular basis helps to ensure that the selected sites remain relevant. The review also provides the opportunity to add new open-source information sites with the potential to provide evidence of unauthorized disclosure of organizational information. The list of sites monitored can be guided and informed by threat intelligence of other credible sources of information.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AU-13(3)",
        "controlName": "Monitoring for Information Disclosure | Unauthorized Replication of Information",
        "controlText": "Employ discovery techniques, processes, and tools to determine if external entities are replicating organizational information in an unauthorized manner.",
        "discussion": "The unauthorized use or replication of organizational information by external entities can cause adverse impacts on organizational operations and assets, including damage to reputation. Such activity can include the replication of an organizational website by an adversary or hostile threat actor who attempts to impersonate the web-hosting organization. Discovery tools, techniques, and processes used to determine if external entities are replicating organizational information in an unauthorized manner include scanning external websites, monitoring social media, and training staff to recognize the unauthorized use of organizational information.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AU-14(1)",
        "controlName": "Session Audit | System Start-up",
        "controlText": "Initiate session audits automatically at system start-up.",
        "discussion": "The automatic initiation of session audits at startup helps to ensure that the information being captured on selected individuals is complete and not subject to compromise through tampering by malicious threat actors.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "AU-8(1)",
        "controlName": "Time Stamps | Synchronization with Authoritative Time Source",
        "controlText": "[Withdrawn: Moved to SC-45(1).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "AU-14(3)",
        "controlName": "Session Audit | Remote Viewing and Listening",
        "controlText": "Provide and implement the capability for authorized users to remotely view and hear content related to an established user session in real time.",
        "discussion": "None.",
        "relatedControls": "AC-17."
    },
    {
        "controlIdentifier": "AU-8(2)",
        "controlName": "Time Stamps | Secondary Authoritative Time Source",
        "controlText": "[Withdrawn: Moved to SC-45(2).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "AU-16",
        "controlName": "Cross-organizational Audit Logging",
        "controlText": "Employ [Assignment: organization-defined methods] for coordinating [Assignment: organization-defined audit information] among external organizations when audit information is transmitted across organizational boundaries.",
        "discussion": "When organizations use systems or services of external organizations, the audit logging capability necessitates a coordinated, cross-organization approach. For example, maintaining the identity of individuals who request specific services across organizational boundaries may often be difficult, and doing so may prove to have significant performance and privacy ramifications. Therefore, it is often the case that cross-organizational audit logging simply captures the identity of individuals who issue requests at the initial system, and subsequent systems record that the requests originated from authorized individuals. Organizations consider including processes for coordinating audit information requirements and protection of audit information in information exchange agreements.",
        "relatedControls": "AU-3, AU-6, AU-7, CA-3, PT-7."
    },
    {
        "controlIdentifier": "AU-16(1)",
        "controlName": "Cross-organizational Audit Logging | Identity Preservation",
        "controlText": "Preserve the identity of individuals in cross-organizational audit trails.",
        "discussion": "Identity preservation is applied when there is a need to be able to trace actions that are performed across organizational boundaries to a specific individual.",
        "relatedControls": "IA-2, IA-4, IA-5, IA-8."
    },
    {
        "controlIdentifier": "AU-16(2)",
        "controlName": "Cross-organizational Audit Logging | Sharing of Audit Information",
        "controlText": "Provide cross-organizational audit information to [Assignment: organization-defined organizations] based on [Assignment: organization-defined cross-organizational sharing agreements].",
        "discussion": "Due to the distributed nature of the audit information, cross-organization sharing of audit information may be essential for effective analysis of the auditing being performed. For example, the audit records of one organization may not provide sufficient information to determine the appropriate or inappropriate use of organizational information resources by individuals in other organizations. In some instances, only individuals’ home organizations have the appropriate knowledge to make such determinations, thus requiring the sharing of audit information among organizations.",
        "relatedControls": "IR-4, SI-4."
    },
    {
        "controlIdentifier": "AU-16(3)",
        "controlName": "Cross-organizational Audit Logging | Disassociability",
        "controlText": "Implement [Assignment: organization-defined measures] to disassociate individuals from audit information transmitted across organizational boundaries.",
        "discussion": "Preserving identities in audit trails could have privacy ramifications, such as enabling the tracking and profiling of individuals, but may not be operationally necessary. These risks could be further amplified when transmitting information across organizational boundaries. Implementing privacy-enhancing cryptographic techniques can disassociate individuals from audit information and reduce privacy risk while maintaining accountability.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "CA-2(2)",
        "controlName": "Control Assessments | Specialized Assessments",
        "controlText": "Include as part of control assessments, [Assignment: organization-defined frequency], [Selection: announced; unannounced], [Selection (one or more): in-depth monitoring; security instrumentation; automated security test cases; vulnerability scanning; malicious user testing; insider threat assessment; performance and load testing; data leakage or data loss assessment; [Assignment: organization-defined other forms of assessment]].",
        "discussion": "Organizations can conduct specialized assessments, including verification and validation, system monitoring, insider threat assessments, malicious user testing, and other forms of testing. These assessments can improve readiness by exercising organizational capabilities and indicating current levels of performance as a means of focusing actions to improve security and privacy. Organizations conduct specialized assessments in accordance with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines. Authorizing officials approve the assessment methods in coordination with the organizational risk executive function. Organizations can include vulnerabilities uncovered during assessments into vulnerability remediation processes. Specialized assessments can also be conducted early in the system development life cycle (e.g., during initial design, development, and unit testing).",
        "relatedControls": "PE-3, SI-2."
    },
    {
        "controlIdentifier": "CA-2(3)",
        "controlName": "Control Assessments | Leveraging Results from External Organizations",
        "controlText": "Leverage the results of control assessments performed by [Assignment: organization-defined external organization] on [Assignment: organization-defined system] when the assessment meets [Assignment: organization-defined requirements].",
        "discussion": "Organizations may rely on control assessments of organizational systems by other (external) organizations. Using such assessments and reusing existing assessment evidence can decrease the time and resources required for assessments by limiting the independent assessment activities that organizations need to perform. The factors that organizations consider in determining whether to accept assessment results from external organizations can vary. Such factors include the organization’s past experience with the organization that conducted the assessment, the reputation of the assessment organization, the level of detail of supporting assessment evidence provided, and mandates imposed by applicable laws, executive orders, directives, regulations, policies, standards, and guidelines. Accredited testing laboratories that support the Common Criteria Program ISO 15408-1, the NIST Cryptographic Module Validation Program (CMVP), or the NIST Cryptographic Algorithm Validation Program (CAVP) can provide independent assessment results that organizations can leverage.",
        "relatedControls": "SA-4."
    },
    {
        "controlIdentifier": "CA-3(1)",
        "controlName": "Information Exchange | Unclassified National Security System Connections",
        "controlText": "[Withdrawn: Moved to SC-7(25).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "CA-3(2)",
        "controlName": "Information Exchange | Classified National Security System Connections",
        "controlText": "[Withdrawn: Moved to SC-7(26).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "CA-3(3)",
        "controlName": "Information Exchange | Unclassified Non-national Security System Connections",
        "controlText": "[Withdrawn: Moved to SC-7(27).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "CA-3(4)",
        "controlName": "Information Exchange | Connections to Public Networks",
        "controlText": "[Withdrawn: Moved to SC-7(28).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "CA-3(5)",
        "controlName": "Information Exchange | Restrictions on External System Connections",
        "controlText": "[Withdrawn: Moved to SC-7(5).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "CA-3(6)",
        "controlName": "Information Exchange | Transfer Authorizations",
        "controlText": "Verify that individuals or systems transferring data between interconnecting systems have the requisite authorizations (i.e., write permissions or privileges) prior to accepting such data.",
        "discussion": "To prevent unauthorized individuals and systems from making information transfers to protected systems, the protected system verifies—via independent means— whether the individual or system attempting to transfer information is authorized to do so. Verification of the authorization to transfer information also applies to control plane traffic (e.g., routing and DNS) and services (e.g., authenticated SMTP relays).",
        "relatedControls": "AC-2, AC-3, AC-4."
    },
    {
        "controlIdentifier": "CA-4",
        "controlName": "Security Certification",
        "controlText": "[Withdrawn: Incorporated into CA-2.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "CA-5(1)",
        "controlName": "Plan of Action and Milestones | Automation Support for Accuracy and Currency",
        "controlText": "Ensure the accuracy, currency, and availability of the plan of action and milestones for the system using [Assignment: organization-defined automated mechanisms].",
        "discussion": "Using automated tools helps maintain the accuracy, currency, and availability of the plan of action and milestones and facilitates the coordination and sharing of security and privacy information throughout the organization. Such coordination and information sharing help to identify systemic weaknesses or deficiencies in organizational systems and ensure that appropriate resources are directed at the most critical system vulnerabilities in a timely manner.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "CA-6(1)",
        "controlName": "Authorization | Joint Authorization — Intra-organization",
        "controlText": "Employ a joint authorization process for the system that includes multiple authorizing officials from the same organization conducting the authorization.",
        "discussion": "Assigning multiple authorizing officials from the same organization to serve as co-authorizing officials for the system increases the level of independence in the risk-based decision-making process. It also implements the concepts of separation of duties and dual authorization as applied to the system authorization process. The intra-organization joint authorization process is most relevant for connected systems, shared systems, and systems with multiple information owners.",
        "relatedControls": "AC-6."
    },
    {
        "controlIdentifier": "CA-6(2)",
        "controlName": "Authorization | Joint Authorization — Inter-organization",
        "controlText": "Employ a joint authorization process for the system that includes multiple authorizing officials with at least one authorizing official from an organization external to the organization conducting the authorization.",
        "discussion": "Assigning multiple authorizing officials, at least one of whom comes from an external organization, to serve as co-authorizing officials for the system increases the level of independence in the risk-based decision-making process. It implements the concepts of separation of duties and dual authorization as applied to the system authorization process. Employing authorizing officials from external organizations to supplement the authorizing official from the organization that owns or hosts the system may be necessary when the external organizations have a vested interest or equities in the outcome of the authorization decision. The inter-organization joint authorization process is relevant and appropriate for connected systems, shared systems or services, and systems with multiple information owners. The authorizing officials from the external organizations are key stakeholders of the system undergoing authorization.",
        "relatedControls": "AC-6."
    },
    {
        "controlIdentifier": "CA-9(1)",
        "controlName": "Internal System Connections | Compliance Checks",
        "controlText": "Perform security and privacy compliance checks on constituent system components prior to the establishment of the internal connection.",
        "discussion": "Compliance checks include verification of the relevant baseline configuration.",
        "relatedControls": "CM-6."
    },
    {
        "controlIdentifier": "CM-11(1)",
        "controlName": "User-installed Software | Alerts for Unauthorized Installations",
        "controlText": "[Withdrawn: Incorporated into CM-8(3).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "CM-2(2)",
        "controlName": "Baseline Configuration | Automation Support for Accuracy and Currency",
        "controlText": "Maintain the currency, completeness, accuracy, and availability of the baseline configuration of the system using [Assignment: organization-defined automated mechanisms].",
        "discussion": "Automated mechanisms that help organizations maintain consistent baseline configurations for systems include configuration management tools, hardware, software, firmware inventory tools, and network management tools. Automated tools can be used at the organization level, mission and business process level, or system level on workstations, servers, notebook computers, network components, or mobile devices. Tools can be used to track version numbers on operating systems, applications, types of software installed, and current patch levels. Automation support for accuracy and currency can be satisfied by the implementation of CM-8(2) for organizations that combine system component inventory and baseline configuration activities.",
        "relatedControls": "CM-7, IA-3, RA-5."
    },
    {
        "controlIdentifier": "CM-2(3)",
        "controlName": "Baseline Configuration | Retention of Previous Configurations",
        "controlText": "Retain [Assignment: organization-defined number] of previous versions of baseline configurations of the system to support rollback.",
        "discussion": "Retaining previous versions of baseline configurations to support rollback include hardware, software, firmware, configuration files, configuration records, and associated documentation.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "CM-2(1)",
        "controlName": "Baseline Configuration | Reviews and Updates",
        "controlText": "[Withdrawn: Incorporated into CM-2.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "CM-2(4)",
        "controlName": "Baseline Configuration | Unauthorized Software",
        "controlText": "[Withdrawn: Incorporated into CM-7(4).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "CM-2(6)",
        "controlName": "Baseline Configuration | Development and Test Environments",
        "controlText": "Maintain a baseline configuration for system development and test environments that is managed separately from the operational baseline configuration.",
        "discussion": "Establishing separate baseline configurations for development, testing, and operational environments protects systems from unplanned or unexpected events related to development and testing activities. Separate baseline configurations allow organizations to apply the configuration management that is most appropriate for each type of configuration. For example, the management of operational configurations typically emphasizes the need for stability, while the management of development or test configurations requires greater flexibility. Configurations in the test environment mirror configurations in the operational environment to the extent practicable so that the results of the testing are representative of the proposed changes to the operational systems. Separate baseline configurations do not necessarily require separate physical environments.",
        "relatedControls": "CM-4, SC-3, SC-7."
    },
    {
        "controlIdentifier": "CM-3(2)",
        "controlName": "Configuration Change Control | Testing, Validation, and Documentation of Changes",
        "controlText": "Test, validate, and document changes to the system before finalizing the implementation of the changes.",
        "discussion": "Changes to systems include modifications to hardware, software, or firmware components and configuration settings defined in CM-6. Organizations ensure that testing does not interfere with system operations that support organizational mission and business functions. Individuals or groups conducting tests understand security and privacy policies and procedures, system security and privacy policies and procedures, and the health, safety, and environmental risks associated with specific facilities or processes. Operational systems may need to be taken offline, or replicated to the extent feasible, before testing can be conducted. If systems must be taken offline for testing, the tests are scheduled to occur during planned system outages whenever possible. If the testing cannot be conducted on operational systems, organizations employ compensating controls.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "CM-3(3)",
        "controlName": "Configuration Change Control | Automated Change Implementation",
        "controlText": "Implement changes to the current system baseline and deploy the updated baseline across the installed base using [Assignment: organization-defined automated mechanisms].",
        "discussion": "Automated tools can improve the accuracy, consistency, and availability of configuration baseline information. Automation can also provide data aggregation and data correlation capabilities, alerting mechanisms, and dashboards to support risk-based decision-making within the organization.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "CM-3(4)",
        "controlName": "Configuration Change Control | Security and Privacy Representatives",
        "controlText": "Require [Assignment: organization-defined security and privacy representatives] to be members of the [Assignment: organization-defined configuration change control element].",
        "discussion": "Information security and privacy representatives include system security officers, senior agency information security officers, senior agency officials for privacy, or system privacy officers. Representation by personnel with information security and privacy expertise is important because changes to system configurations can have unintended side effects, some of which may be security- or privacy-relevant. Detecting such changes early in the process can help avoid unintended, negative consequences that could ultimately affect the security and privacy posture of systems. The configuration change control element referred to in the second organization-defined parameter reflects the change control elements defined by organizations in CM-3g.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "CM-3(5)",
        "controlName": "Configuration Change Control | Automated Security Response",
        "controlText": "Implement the following security responses automatically if baseline configurations are changed in an unauthorized manner: [Assignment: organization-defined security responses].",
        "discussion": "Automated security responses include halting selected system functions, halting system processing, and issuing alerts or notifications to organizational personnel when there is an unauthorized modification of a configuration item.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "CM-3(6)",
        "controlName": "Configuration Change Control | Cryptography Management",
        "controlText": "Ensure that cryptographic mechanisms used to provide the following controls are under configuration management: [Assignment: organization-defined controls].",
        "discussion": "The controls referenced in the control enhancement refer to security and privacy controls from the control catalog. Regardless of the cryptographic mechanisms employed, processes and procedures are in place to manage those mechanisms. For example, if system components use certificates for identification and authentication, a process is implemented to address the expiration of those certificates.",
        "relatedControls": "SC-12."
    },
    {
        "controlIdentifier": "CM-3(7)",
        "controlName": "Configuration Change Control | Review System Changes",
        "controlText": "Review changes to the system [Assignment: organization-defined frequency] or when [Assignment: organization-defined circumstances] to determine whether unauthorized changes have occurred.",
        "discussion": "Indications that warrant a review of changes to the system and the specific circumstances justifying such reviews may be obtained from activities carried out by organizations during the configuration change process or continuous monitoring process.",
        "relatedControls": "AU-6, AU-7, CM-3."
    },
    {
        "controlIdentifier": "CM-3(8)",
        "controlName": "Configuration Change Control | Prevent or Restrict Configuration Changes",
        "controlText": "Prevent or restrict changes to the configuration of the system under the following circumstances: [Assignment: organization-defined circumstances].",
        "discussion": "System configuration changes can adversely affect critical system security and privacy functionality. Change restrictions can be enforced through automated mechanisms.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "CM-4",
        "controlName": "Impact Analyses",
        "controlText": "Analyze changes to the system to determine potential security and privacy impacts prior to change implementation.",
        "discussion": "Organizational personnel with security or privacy responsibilities conduct impact analyses. Individuals conducting impact analyses possess the necessary skills and technical expertise to analyze the changes to systems as well as the security or privacy ramifications. Impact analyses include reviewing security and privacy plans, policies, and procedures to understand control requirements; reviewing system design documentation and operational procedures to understand control implementation and how specific system changes might affect the controls; reviewing the impact of changes on organizational supply chain partners with stakeholders; and determining how potential changes to a system create new risks to the privacy of individuals and the ability of implemented controls to mitigate those risks. Impact analyses also include risk assessments to understand the impact of the changes and determine if additional controls are required.",
        "relatedControls": "CA-7, CM-3, CM-8, CM-9, MA-2, RA-3, RA-5, RA-8, SA-5, SA-8, SA-10, SI-2."
    },
    {
        "controlIdentifier": "CM-4(1)",
        "controlName": "Impact Analyses | Separate Test Environments",
        "controlText": "Analyze changes to the system in a separate test environment before implementation in an operational environment, looking for security and privacy impacts due to flaws, weaknesses, incompatibility, or intentional malice.",
        "discussion": "A separate test environment requires an environment that is physically or logically separate and distinct from the operational environment. The separation is sufficient to ensure that activities in the test environment do not impact activities in the operational environment and that information in the operational environment is not inadvertently transmitted to the test environment. Separate environments can be achieved by physical or logical means. If physically separate test environments are not implemented, organizations determine the strength of mechanism required when implementing logical separation.",
        "relatedControls": "SA-11, SC-7."
    },
    {
        "controlIdentifier": "CM-4(2)",
        "controlName": "Impact Analyses | Verification of Controls",
        "controlText": "After system changes, verify that the impacted controls are implemented correctly, operating as intended, and producing the desired outcome with regard to meeting the security and privacy requirements for the system.",
        "discussion": "Implementation in this context refers to installing changed code in the operational system that may have an impact on security or privacy controls.",
        "relatedControls": "SA-11, SC-3, SI-6."
    },
    {
        "controlIdentifier": "CM-5",
        "controlName": "Access Restrictions for Change",
        "controlText": "Define, document, approve, and enforce physical and logical access restrictions associated with changes to the system.",
        "discussion": "Changes to the hardware, software, or firmware components of systems or the operational procedures related to the system can potentially have significant effects on the security of the systems or individuals’ privacy. Therefore, organizations permit only qualified and authorized individuals to access systems for purposes of initiating changes. Access restrictions include physical and logical access controls (see AC-3 and PE-3), software libraries, workflow automation, media libraries, abstract layers (i.e., changes implemented into external interfaces rather than directly into systems), and change windows (i.e., changes occur only during specified times).",
        "relatedControls": "AC-3, AC-5, AC-6, CM-9, PE-3, SC-28, SC-34, SC-37, SI-2, SI-10."
    },
    {
        "controlIdentifier": "CM-2(5)",
        "controlName": "Baseline Configuration | Authorized Software",
        "controlText": "[Withdrawn: Incorporated into CM-7(5).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "CM-5(2)",
        "controlName": "Access Restrictions for Change | Review System Changes",
        "controlText": "[Withdrawn: Incorporated into CM-3(7).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "CM-5(4)",
        "controlName": "Access Restrictions for Change | Dual Authorization",
        "controlText": "Enforce dual authorization for implementing changes to [Assignment: organization-defined system components and system-level information].",
        "discussion": "Organizations employ dual authorization to help ensure that any changes to selected system components and information cannot occur unless two qualified individuals approve and implement such changes. The two individuals possess the skills and expertise to determine if the proposed changes are correct implementations of approved changes. The individuals are also accountable for the changes. Dual authorization may also be known as two-person control. To reduce the risk of collusion, organizations consider rotating dual authorization duties to other individuals. System-level information includes operational procedures.",
        "relatedControls": "AC-2, AC-5, CM-3."
    },
    {
        "controlIdentifier": "CM-5(6)",
        "controlName": "Access Restrictions for Change | Limit Library Privileges",
        "controlText": "Limit privileges to change software resident within software libraries.",
        "discussion": "Software libraries include privileged programs.",
        "relatedControls": "AC-2."
    },
    {
        "controlIdentifier": "CM-5(3)",
        "controlName": "Access Restrictions for Change | Signed Components",
        "controlText": "[Withdrawn: Moved to CM-14.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "CM-6(1)",
        "controlName": "Configuration Settings | Automated Management, Application, and Verification",
        "controlText": "Manage, apply, and verify configuration settings for [Assignment: organization-defined system components] using [Assignment: organization-defined automated mechanisms].",
        "discussion": "Automated tools (e.g., hardening tools, baseline configuration tools) can improve the accuracy, consistency, and availability of configuration settings information. Automation can also provide data aggregation and data correlation capabilities, alerting mechanisms, and dashboards to support risk-based decision-making within the organization.",
        "relatedControls": "CA-7."
    },
    {
        "controlIdentifier": "CM-6(2)",
        "controlName": "Configuration Settings | Respond to Unauthorized Changes",
        "controlText": "Take the following actions in response to unauthorized changes to [Assignment: organization-defined configuration settings]: [Assignment: organization-defined actions].",
        "discussion": "Responses to unauthorized changes to configuration settings include alerting designated organizational personnel, restoring established configuration settings, or—in extreme cases—halting affected system processing.",
        "relatedControls": "IR-4, IR-6, SI-7."
    },
    {
        "controlIdentifier": "CM-5(7)",
        "controlName": "Access Restrictions for Change | Automatic Implementation of Security Safeguards",
        "controlText": "[Withdrawn: Incorporated into SI-7.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "CM-6(3)",
        "controlName": "Configuration Settings | Unauthorized Change Detection",
        "controlText": "[Withdrawn: Incorporated into SI-7.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "CM-7(2)",
        "controlName": "Least Functionality | Prevent Program Execution",
        "controlText": "Prevent program execution in accordance with [Selection (one or more): [Assignment: organization-defined policies, rules of behavior, and/or access agreements regarding software program usage and restrictions]; rules authorizing the terms and conditions of software program usage].",
        "discussion": "Prevention of program execution addresses organizational policies, rules of behavior, and/or access agreements that restrict software usage and the terms and conditions imposed by the developer or manufacturer, including software licensing and copyrights. Restrictions include prohibiting auto-execute features, restricting roles allowed to approve program execution, permitting or prohibiting specific software programs, or restricting the number of program instances executed at the same time.",
        "relatedControls": "CM-8, PL-4, PL-9, PM-5, PS-6."
    },
    {
        "controlIdentifier": "CM-7(3)",
        "controlName": "Least Functionality | Registration Compliance",
        "controlText": "Ensure compliance with [Assignment: organization-defined registration requirements for functions, ports, protocols, and services].",
        "discussion": "Organizations use the registration process to manage, track, and provide oversight for systems and implemented functions, ports, protocols, and services.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "CM-7(6)",
        "controlName": "Least Functionality | Confined Environments with Limited Privileges",
        "controlText": "Require that the following user-installed software execute in a confined physical or virtual machine environment with limited privileges: [Assignment: organization-defined user-installed software].",
        "discussion": "Organizations identify software that may be of concern regarding its origin or potential for containing malicious code. For this type of software, user installations occur in confined environments of operation to limit or contain damage from malicious code that may be executed.",
        "relatedControls": "CM-11, SC-44."
    },
    {
        "controlIdentifier": "CM-8(1)",
        "controlName": "System Component Inventory | Updates During Installation and Removal",
        "controlText": "Update the inventory of system components as part of component installations, removals, and system updates.",
        "discussion": "Organizations can improve the accuracy, completeness, and consistency of system component inventories if the inventories are updated as part of component installations or removals or during general system updates. If inventories are not updated at these key times, there is a greater likelihood that the information will not be appropriately captured and documented. System updates include hardware, software, and firmware components.",
        "relatedControls": "PM-16."
    },
    {
        "controlIdentifier": "CM-8(2)",
        "controlName": "System Component Inventory | Automated Maintenance",
        "controlText": "Maintain the currency, completeness, accuracy, and availability of the inventory of system components using [Assignment: organization-defined automated mechanisms].",
        "discussion": "Organizations maintain system inventories to the extent feasible. For example, virtual machines can be difficult to monitor because such machines are not visible to the network when not in use. In such cases, organizations maintain as up-to-date, complete, and accurate an inventory as is deemed reasonable. Automated maintenance can be achieved by the implementation of CM-2(2) for organizations that combine system component inventory and baseline configuration activities.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "CM-8(4)",
        "controlName": "System Component Inventory | Accountability Information",
        "controlText": "Include in the system component inventory information, a means for identifying by [Selection (one or more): name; position; role], individuals responsible and accountable for administering those components.",
        "discussion": "Identifying individuals who are responsible and accountable for administering system components ensures that the assigned components are properly administered and that organizations can contact those individuals if some action is required (e.g., when the component is determined to be the source of a breach, needs to be recalled or replaced, or needs to be relocated).",
        "relatedControls": "AC-3."
    },
    {
        "controlIdentifier": "CM-6(4)",
        "controlName": "Configuration Settings | Conformance Demonstration",
        "controlText": "[Withdrawn: Incorporated into CM-4.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "CM-8(6)",
        "controlName": "System Component Inventory | Assessed Configurations and Approved Deviations",
        "controlText": "Include assessed component configurations and any approved deviations to current deployed configurations in the system component inventory.",
        "discussion": "Assessed configurations and approved deviations focus on configuration settings established by organizations for system components, the specific components that have been assessed to determine compliance with the required configuration settings, and any approved deviations from established configuration settings.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "CM-8(7)",
        "controlName": "System Component Inventory | Centralized Repository",
        "controlText": "Provide a centralized repository for the inventory of system components.",
        "discussion": "Organizations may implement centralized system component inventories that include components from all organizational systems. Centralized repositories of component inventories provide opportunities for efficiencies in accounting for organizational hardware, software, and firmware assets. Such repositories may also help organizations rapidly identify the location and responsible individuals of components that have been compromised, breached, or are otherwise in need of mitigation actions. Organizations ensure that the resulting centralized inventories include system-specific information required for proper component accountability.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "CM-8(8)",
        "controlName": "System Component Inventory | Automated Location Tracking",
        "controlText": "Support the tracking of system components by geographic location using [Assignment: organization-defined automated mechanisms].",
        "discussion": "The use of automated mechanisms to track the location of system components can increase the accuracy of component inventories. Such capability may help organizations rapidly identify the location and responsible individuals of system components that have been compromised, breached, or are otherwise in need of mitigation actions. The use of tracking mechanisms can be coordinated with senior agency officials for privacy if there are implications that affect individual privacy.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "CM-9(1)",
        "controlName": "Configuration Management Plan | Assignment of Responsibility",
        "controlText": "Assign responsibility for developing the configuration management process to organizational personnel that are not directly involved in system development.",
        "discussion": "In the absence of dedicated configuration management teams assigned within organizations, system developers may be tasked with developing configuration management processes using personnel who are not directly involved in system development or system integration. This separation of duties ensures that organizations establish and maintain a sufficient degree of independence between the system development and integration processes and configuration management processes to facilitate quality control and more effective oversight.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "CM-10(1)",
        "controlName": "Software Usage Restrictions | Open-source Software",
        "controlText": "Establish the following restrictions on the use of open-source software: [Assignment: organization-defined restrictions].",
        "discussion": "Open-source software refers to software that is available in source code form. Certain software rights normally reserved for copyright holders are routinely provided under software license agreements that permit individuals to study, change, and improve the software. From a security perspective, the major advantage of open-source software is that it provides organizations with the ability to examine the source code. In some cases, there is an online community associated with the software that inspects, tests,  updates, and reports on issues found in software on an ongoing basis. However, remediating vulnerabilities in open-source software may be problematic. There may also be licensing issues associated with open-source software, including the constraints on derivative use of such software. Open-source software that is available only in binary form may increase the level of risk in using such software.",
        "relatedControls": "SI-7."
    },
    {
        "controlIdentifier": "CM-8(5)",
        "controlName": "System Component Inventory | No Duplicate Accounting of Components",
        "controlText": "[Withdrawn: Incorporated into CM-8.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "CM-11(2)",
        "controlName": "User-installed Software | Software Installation with Privileged Status",
        "controlText": "Allow user installation of software only with explicit privileged status.",
        "discussion": "Privileged status can be obtained, for example, by serving in the role of system administrator.",
        "relatedControls": "AC-5, AC-6."
    },
    {
        "controlIdentifier": "CM-11(3)",
        "controlName": "User-installed Software | Automated Enforcement and Monitoring",
        "controlText": "Enforce and monitor compliance with software installation policies using [Assignment: organization-defined automated mechanisms].",
        "discussion": "Organizations enforce and monitor compliance with software installation policies using automated mechanisms to more quickly detect and respond to unauthorized software installation which can be an indicator of an internal or external hostile attack.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "CM-12(1)",
        "controlName": "Information Location | Automated Tools to Support Information Location",
        "controlText": "Use automated tools to identify [Assignment: organization-defined information by information type] on [Assignment: organization-defined system components] to ensure controls are in place to protect organizational information and individual privacy.",
        "discussion": "The use of automated tools helps to increase the effectiveness and efficiency of the information location capability implemented within the system. Automation also helps organizations manage the data produced during information location activities and share such information across the organization. The output of automated information location tools can be used to guide and inform system architecture and design decisions.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "CM-13",
        "controlName": "Data Action Mapping",
        "controlText": "Develop and document a map of system data actions.",
        "discussion": "Data actions are system operations that process personally identifiable information. The processing of such information encompasses the full information life cycle, which includes collection, generation, transformation, use, disclosure, retention, and disposal. A map of system data actions includes discrete data actions, elements of personally identifiable information being processed in the data actions, system components involved in the data actions, and the owners or operators of the system components. Understanding what personally identifiable information is being processed (e.g., the sensitivity of the personally identifiable information), how personally identifiable information is being processed (e.g., if the data action is visible to the individual or is processed in another part of the system), and by whom (e.g., individuals may have different privacy perceptions based on the entity that is processing the personally identifiable information) provides a number of contextual factors that are important to assessing the degree of privacy risk created by the system. Data maps can be illustrated in different ways, and the level of detail may vary based on the mission and business needs of the organization. The data map may be an overlay of any system design artifact that the organization is using. The development of this map may necessitate coordination between the privacy and security programs regarding the covered data actions and the components that are identified as part of the system.",
        "relatedControls": "AC-3, CM-4, CM-12, PM-5, PM-27, PT-2, PT-3, RA-3, RA-8."
    },
    {
        "controlIdentifier": "CM-14",
        "controlName": "Signed Components",
        "controlText": "Prevent the installation of [Assignment: organization-defined software and firmware components] without verification that the component has been digitally signed using a certificate that is recognized and approved by the organization.",
        "discussion": "Software and firmware components prevented from installation unless signed with recognized and approved certificates include software and firmware version updates, patches, service packs, device drivers, and basic input/output system updates. Organizations can identify applicable software and firmware components by type, by specific items, or a combination of both. Digital signatures and organizational verification of such signatures is a method of code authentication.",
        "relatedControls": "CM-7, SC-12, SC-13, SI-7."
    },
    {
        "controlIdentifier": "CP-2(1)",
        "controlName": "Contingency Plan | Coordinate with Related Plans",
        "controlText": "Coordinate contingency plan development with organizational elements responsible for related plans.",
        "discussion": "Plans that are related to contingency plans include Business Continuity Plans, Disaster Recovery Plans, Critical Infrastructure Plans, Continuity of Operations Plans, Crisis Communications Plans, Insider Threat Implementation Plans, Data Breach Response Plans, Cyber Incident Response Plans, Breach Response Plans, and Occupant Emergency Plans.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "CP-2(2)",
        "controlName": "Contingency Plan | Capacity Planning",
        "controlText": "Conduct capacity planning so that necessary capacity for information processing, telecommunications, and environmental support exists during contingency operations.",
        "discussion": "Capacity planning is needed because different threats can result in a reduction of the available processing, telecommunications, and support services intended to support essential mission and business functions. Organizations anticipate degraded operations during contingency operations and factor the degradation into capacity planning. For capacity planning, environmental support refers to any environmental factor for which the organization determines that it needs to provide support in a contingency situation, even if in a degraded state. Such determinations are based on an organizational assessment of risk, system categorization (impact level), and organizational risk tolerance.",
        "relatedControls": "PE-11, PE-12, PE-13, PE-14, PE-18, SC-5."
    },
    {
        "controlIdentifier": "CP-2(3)",
        "controlName": "Contingency Plan | Resume Mission and Business Functions",
        "controlText": "Plan for the resumption of [Selection: all; essential] mission and business functions within [Assignment: organization-defined time period] of contingency plan activation.",
        "discussion": "Organizations may choose to conduct contingency planning activities to resume mission and business functions as part of business continuity planning or as part of business impact analyses. Organizations prioritize the resumption of mission and business functions. The time period for resuming mission and business functions may be dependent on the severity and extent of the disruptions to the system and its supporting infrastructure.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "CP-10(1)",
        "controlName": "System Recovery and Reconstitution | Contingency Plan Testing",
        "controlText": "[Withdrawn: Incorporated into CP-4.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "CP-2(5)",
        "controlName": "Contingency Plan | Continue Mission and Business Functions",
        "controlText": "Plan for the continuance of [Selection: all; essential] mission and business functions with minimal or no loss of operational continuity and sustains that continuity until full system restoration at primary processing and/or storage sites.",
        "discussion": "Organizations may choose to conduct the contingency planning activities to continue mission and business functions as part of business continuity planning or business impact analyses. Primary processing and/or storage sites defined by organizations as part of contingency planning may change depending on the circumstances associated with the contingency.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "CP-2(6)",
        "controlName": "Contingency Plan | Alternate Processing and Storage Sites",
        "controlText": "Plan for the transfer of [Selection: all; essential] mission and business functions to alternate processing and/or storage sites with minimal or no loss of operational continuity and sustain that continuity through system restoration to primary processing and/or storage sites.",
        "discussion": "Organizations may choose to conduct contingency planning activities for alternate processing and storage sites as part of business continuity planning or business impact analyses. Primary processing and/or storage sites defined by organizations as part of contingency planning may change depending on the circumstances associated with the contingency.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "CP-2(7)",
        "controlName": "Contingency Plan | Coordinate with External Service Providers",
        "controlText": "Coordinate the contingency plan with the contingency plans of external service providers to ensure that contingency requirements can be satisfied.",
        "discussion": "When the capability of an organization to carry out its mission and business functions is dependent on external service providers, developing a comprehensive and timely contingency plan may become more challenging. When mission and business functions are dependent on external service providers, organizations coordinate contingency planning activities with the external entities to ensure that the individual plans reflect the overall contingency needs of the organization.",
        "relatedControls": "SA-9."
    },
    {
        "controlIdentifier": "CP-2(8)",
        "controlName": "Contingency Plan | Identify Critical Assets",
        "controlText": "Identify critical system assets supporting [Selection: all; essential] mission and business functions.",
        "discussion": "Organizations may choose to identify critical assets as part of criticality analysis, business continuity planning, or business impact analyses. Organizations identify critical system assets so that additional controls can be employed (beyond the controls routinely implemented) to help ensure that organizational mission and business functions can continue to be conducted during contingency operations. The identification of critical information assets also facilitates the prioritization of organizational resources. Critical system assets include technical and operational aspects. Technical aspects include system components, information technology services, information technology products, and mechanisms. Operational aspects include procedures (i.e., manually executed operations) and personnel (i.e., individuals operating technical controls and/or executing manual procedures). Organizational program protection plans can assist in identifying critical assets. If critical assets are resident within or supported by external service providers, organizations consider implementing CP-2(7) as a control enhancement.",
        "relatedControls": "CM-8, RA-9."
    },
    {
        "controlIdentifier": "CP-3(1)",
        "controlName": "Contingency Training | Simulated Events",
        "controlText": "Incorporate simulated events into contingency training to facilitate effective response by personnel in crisis situations.",
        "discussion": "The use of simulated events creates an environment for personnel to experience actual threat events, including cyber-attacks that disable websites, ransomware attacks that encrypt organizational data on servers, hurricanes that damage or destroy organizational facilities, or hardware or software failures.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "CP-3(2)",
        "controlName": "Contingency Training | Mechanisms Used in Training Environments",
        "controlText": "Employ mechanisms used in operations to provide a more thorough and realistic contingency training environment.",
        "discussion": "Operational mechanisms refer to processes that have been established to accomplish an organizational goal or a system that supports a particular organizational mission or business objective. Actual mission and business processes, systems, and/or facilities may be used to generate simulated events and enhance the realism of simulated events during contingency training.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "CP-4(1)",
        "controlName": "Contingency Plan Testing | Coordinate with Related Plans",
        "controlText": "Coordinate contingency plan testing with organizational elements responsible for related plans.",
        "discussion": "Plans related to contingency planning for organizational systems include Business Continuity Plans, Disaster Recovery Plans, Continuity of Operations Plans, Crisis Communications Plans, Critical Infrastructure Plans, Cyber Incident Response Plans, and Occupant Emergency Plans. Coordination of contingency plan testing does not require organizations to create organizational elements to handle related plans or to align such elements with specific plans. However, it does require that if such organizational elements are responsible for related plans, organizations coordinate with those elements.",
        "relatedControls": "IR-8, PM-8."
    },
    {
        "controlIdentifier": "CP-4(3)",
        "controlName": "Contingency Plan Testing | Automated Testing",
        "controlText": "Test the contingency plan using [Assignment: organization-defined automated mechanisms].",
        "discussion": "Automated mechanisms facilitate thorough and effective testing of contingency plans by providing more complete coverage of contingency issues, selecting more realistic test scenarios and environments, and effectively stressing the system and supported mission and business functions.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "CP-4(4)",
        "controlName": "Contingency Plan Testing | Full Recovery and Reconstitution",
        "controlText": "Include a full recovery and reconstitution of the system to a known state as part of contingency plan testing.",
        "discussion": "Recovery is executing contingency plan activities to restore organizational mission and business functions. Reconstitution takes place following recovery and includes activities for returning systems to fully operational states. Organizations establish a known state for systems that includes system state information for hardware, software programs, and data. Preserving system state information facilitates system restart and return to the operational mode of organizations with less disruption of mission and business processes.",
        "relatedControls": "CP-10, SC-24."
    },
    {
        "controlIdentifier": "CP-4(5)",
        "controlName": "Contingency Plan Testing | Self-challenge",
        "controlText": "Employ [Assignment: organization-defined mechanisms] to [Assignment: organization-defined system or system component] to disrupt and adversely affect the system or system component.",
        "discussion": "Often, the best method of assessing system resilience is to disrupt the system in some manner. The mechanisms used by the organization could disrupt system functions or system services in many ways, including terminating or disabling critical system components, changing the configuration of system components, degrading critical functionality (e.g., restricting network bandwidth), or altering privileges. Automated, on-going, and simulated cyber-attacks and service disruptions can reveal unexpected functional dependencies and help the organization determine its ability to ensure resilience in the face of an actual cyber-attack.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "CP-10(3)",
        "controlName": "System Recovery and Reconstitution | Compensating Security Controls",
        "controlText": "[Withdrawn: Addressed through tailoring.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "CP-6(1)",
        "controlName": "Alternate Storage Site | Separation from Primary Site",
        "controlText": "Identify an alternate storage site that is sufficiently separated from the primary storage site to reduce susceptibility to the same threats.",
        "discussion": "Threats that affect alternate storage sites are defined in organizational risk assessments and include natural disasters, structural failures, hostile attacks, and errors of omission or commission. Organizations determine what is considered a sufficient degree of separation between primary and alternate storage sites based on the types of threats that are of concern. For threats such as hostile attacks, the degree of separation between sites is less relevant.",
        "relatedControls": "RA-3."
    },
    {
        "controlIdentifier": "CP-6(2)",
        "controlName": "Alternate Storage Site | Recovery Time and Recovery Point Objectives",
        "controlText": "Configure the alternate storage site to facilitate recovery operations in accordance with recovery time and recovery point objectives.",
        "discussion": "Organizations establish recovery time and recovery point objectives as part of contingency planning. Configuration of the alternate storage site includes physical facilities and the systems supporting recovery operations that ensure accessibility and correct execution.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "CP-6(3)",
        "controlName": "Alternate Storage Site | Accessibility",
        "controlText": "Identify potential accessibility problems to the alternate storage site in the event of an area-wide disruption or disaster and outline explicit mitigation actions.",
        "discussion": "Area-wide disruptions refer to those types of disruptions that are broad in geographic scope with such determinations made by organizations based on organizational assessments of risk. Explicit mitigation actions include duplicating backup information at other alternate storage sites if access problems occur at originally designated alternate sites or planning for physical access to retrieve backup information if electronic accessibility to the alternate site is disrupted.",
        "relatedControls": "RA-3."
    },
    {
        "controlIdentifier": "CP-7(1)",
        "controlName": "Alternate Processing Site | Separation from Primary Site",
        "controlText": "Identify an alternate processing site that is sufficiently separated from the primary processing site to reduce susceptibility to the same threats.",
        "discussion": "Threats that affect alternate processing sites are defined in organizational assessments of risk and include natural disasters, structural failures, hostile attacks, and errors of omission or commission. Organizations determine what is considered a sufficient degree of separation between primary and alternate processing sites based on the types of threats that are of concern. For threats such as hostile attacks, the degree of separation between sites is less relevant.",
        "relatedControls": "RA-3."
    },
    {
        "controlIdentifier": "CP-7(2)",
        "controlName": "Alternate Processing Site | Accessibility",
        "controlText": "Identify potential accessibility problems to alternate processing sites in the event of an area-wide disruption or disaster and outlines explicit mitigation actions.",
        "discussion": "Area-wide disruptions refer to those types of disruptions that are broad in geographic scope with such determinations made by organizations based on organizational assessments of risk.",
        "relatedControls": "RA-3."
    },
    {
        "controlIdentifier": "CP-7(3)",
        "controlName": "Alternate Processing Site | Priority of Service",
        "controlText": "Develop alternate processing site agreements that contain priority-of-service provisions in accordance with availability requirements (including recovery time objectives).",
        "discussion": "Priority of service agreements refer to negotiated agreements with service providers that ensure that organizations receive priority treatment consistent with their availability requirements and the availability of information resources for logical alternate processing and/or at the physical alternate processing site. Organizations establish recovery time objectives as part of contingency planning.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "CP-7(4)",
        "controlName": "Alternate Processing Site | Preparation for Use",
        "controlText": "Prepare the alternate processing site so that the site can serve as the operational site supporting essential mission and business functions.",
        "discussion": "Site preparation includes establishing configuration settings for systems at the alternate processing site consistent with the requirements for such settings at the primary site and ensuring that essential supplies and logistical considerations are in place.",
        "relatedControls": "CM-2, CM-6, CP-4."
    },
    {
        "controlIdentifier": "CP-10(5)",
        "controlName": "System Recovery and Reconstitution | Failover Capability",
        "controlText": "[Withdrawn: Incorporated into SI-13.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "CP-7(6)",
        "controlName": "Alternate Processing Site | Inability to Return to Primary Site",
        "controlText": "Plan and prepare for circumstances that preclude returning to the primary processing site.",
        "discussion": "There may be situations that preclude an organization from returning to the primary processing site such as if a natural disaster (e.g., flood or a hurricane) damaged or destroyed a facility and it was determined that rebuilding in the same location was not prudent.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "CP-8",
        "controlName": "Telecommunications Services",
        "controlText": "Establish alternate telecommunications services, including necessary agreements to permit the resumption of [Assignment: organization-defined system operations] for essential mission and business functions within [Assignment: organization-defined time period] when the primary telecommunications capabilities are unavailable at either the primary or alternate processing or storage sites.",
        "discussion": "Telecommunications services (for data and voice) for primary and alternate processing and storage sites are in scope for CP-8. Alternate telecommunications services reflect the continuity requirements in contingency plans to maintain essential mission and business functions despite the loss of primary telecommunications services. Organizations may specify different time periods for primary or alternate sites. Alternate telecommunications services include additional organizational or commercial ground-based circuits or lines, network-based approaches to telecommunications, or the use of satellites. Organizations consider factors such as availability, quality of service, and access when entering into alternate telecommunications agreements.",
        "relatedControls": "CP-2, CP-6, CP-7, CP-11, SC-7."
    },
    {
        "controlIdentifier": "CP-8(2)",
        "controlName": "Telecommunications Services | Single Points of Failure",
        "controlText": "Obtain alternate telecommunications services to reduce the likelihood of sharing a single point of failure with primary telecommunications services.",
        "discussion": "In certain circumstances, telecommunications service providers or services may share the same physical lines, which increases the vulnerability of a single failure point. It is important to have provider transparency for the actual physical transmission capability for telecommunication services.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "CP-8(3)",
        "controlName": "Telecommunications Services | Separation of Primary and Alternate Providers",
        "controlText": "Obtain alternate telecommunications services from providers that are separated from primary service providers to reduce susceptibility to the same threats.",
        "discussion": "Threats that affect telecommunications services are defined in organizational assessments of risk and include natural disasters, structural failures, cyber or physical attacks, and errors of omission or commission. Organizations can reduce common susceptibilities by minimizing shared infrastructure among telecommunications service providers and achieving sufficient geographic separation between services. Organizations may consider using a single service provider in situations where the service provider can provide alternate telecommunications services that meet the separation needs addressed in the risk assessment.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "CP-8(5)",
        "controlName": "Telecommunications Services | Alternate Telecommunication Service Testing",
        "controlText": "Test alternate telecommunication services [Assignment: organization-defined frequency].",
        "discussion": "Alternate telecommunications services testing is arranged through contractual agreements with service providers. The testing may occur in parallel with normal operations to ensure that there is no degradation in organizational missions or functions.",
        "relatedControls": "CP-3."
    },
    {
        "controlIdentifier": "CP-9(1)",
        "controlName": "System Backup | Testing for Reliability and Integrity",
        "controlText": "Test backup information [Assignment: organization-defined frequency] to verify media reliability and information integrity.",
        "discussion": "Organizations need assurance that backup information can be reliably retrieved. Reliability pertains to the systems and system components where the backup information is stored, the operations used to retrieve the information, and the integrity of the information being retrieved. Independent and specialized tests can be used for each of the aspects of reliability. For example, decrypting and transporting (or transmitting) a random sample of backup files from the alternate storage or backup site and comparing the information to the same information at the primary processing site can provide such assurance.",
        "relatedControls": "CP-4."
    },
    {
        "controlIdentifier": "CP-9(2)",
        "controlName": "System Backup | Test Restoration Using Sampling",
        "controlText": "Use a sample of backup information in the restoration of selected system functions as part of contingency plan testing.",
        "discussion": "Organizations need assurance that system functions can be restored correctly and can support established organizational missions. To ensure that the selected system functions are thoroughly exercised during contingency plan testing, a sample of backup information is retrieved to determine whether the functions are operating as intended. Organizations can determine the sample size for the functions and backup information based on the level of assurance needed.",
        "relatedControls": "CP-4."
    },
    {
        "controlIdentifier": "CP-9(3)",
        "controlName": "System Backup | Separate Storage for Critical Information",
        "controlText": "Store backup copies of [Assignment: organization-defined critical system software and other security-related information] in a separate facility or in a fire rated container that is not collocated with the operational system.",
        "discussion": "Separate storage for critical information applies to all critical information regardless of the type of backup storage media. Critical system software includes operating systems, middleware, cryptographic key management systems, and intrusion detection systems. Security-related information includes inventories of system hardware, software, and firmware components. Alternate storage sites, including geographically distributed architectures, serve as separate storage facilities for organizations. Organizations may provide separate storage by implementing automated backup processes at alternative storage sites (e.g., data centers). The General Services Administration (GSA) establishes standards and specifications for security and fire rated containers.",
        "relatedControls": "CM-2, CM-6, CM-8."
    },
    {
        "controlIdentifier": "CP-2(4)",
        "controlName": "Contingency Plan | Resume All Mission and Business Functions",
        "controlText": "[Withdrawn: Incorporated into CP-2(3).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "CP-9(5)",
        "controlName": "System Backup | Transfer to Alternate Storage Site",
        "controlText": "Transfer system backup information to the alternate storage site [Assignment: organization-defined time period and transfer rate consistent with the recovery time and recovery point objectives].",
        "discussion": "System backup information can be transferred to alternate storage sites either electronically or by the physical shipment of storage media.",
        "relatedControls": "CP-7, MP-3, MP-4, MP-5."
    },
    {
        "controlIdentifier": "CP-9(6)",
        "controlName": "System Backup | Redundant Secondary System",
        "controlText": "Conduct system backup by maintaining a redundant secondary system that is not collocated with the primary system and that can be activated without loss of information or disruption to operations.",
        "discussion": "The effect of system backup can be achieved by maintaining a redundant secondary system that mirrors the primary system, including the replication of information. If this type of redundancy is in place and there is sufficient geographic separation between the two systems, the secondary system can also serve as the alternate processing site.",
        "relatedControls": "CP-7."
    },
    {
        "controlIdentifier": "CP-9(7)",
        "controlName": "System Backup | Dual Authorization for Deletion or Destruction",
        "controlText": "Enforce dual authorization for the deletion or destruction of [Assignment: organization-defined backup information].",
        "discussion": "Dual authorization ensures that deletion or destruction of backup information cannot occur unless two qualified individuals carry out the task. Individuals deleting or destroying backup information possess the skills or expertise to determine if the proposed deletion or destruction of information reflects organizational policies and procedures. Dual authorization may also be known as two-person control. To reduce the risk of collusion, organizations consider rotating dual authorization duties to other individuals.",
        "relatedControls": "AC-3, AC-5, MP-2."
    },
    {
        "controlIdentifier": "CP-9(8)",
        "controlName": "System Backup | Cryptographic Protection",
        "controlText": "Implement cryptographic mechanisms to prevent unauthorized disclosure and modification of [Assignment: organization-defined backup information].",
        "discussion": "The selection of cryptographic mechanisms is based on the need to protect the confidentiality and integrity of backup information. The strength of mechanisms selected is commensurate with the security category or classification of the information. Cryptographic protection applies to system backup information in storage at both primary and alternate locations. Organizations that implement cryptographic mechanisms to protect information at rest also consider cryptographic key management solutions.",
        "relatedControls": "SC-12, SC-13, SC-28."
    },
    {
        "controlIdentifier": "CP-10",
        "controlName": "System Recovery and Reconstitution",
        "controlText": "Provide for the recovery and reconstitution of the system to a known state within [Assignment: organization-defined time period consistent with recovery time and recovery point objectives] after a disruption, compromise, or failure.",
        "discussion": "Recovery is executing contingency plan activities to restore organizational mission and business functions. Reconstitution takes place following recovery and includes activities for returning systems to fully operational states. Recovery and reconstitution operations reflect mission and business priorities; recovery point, recovery time, and reconstitution objectives; and organizational metrics consistent with contingency plan requirements. Reconstitution includes the deactivation of interim system capabilities that may have been needed during recovery operations. Reconstitution also includes assessments of fully restored system capabilities, reestablishment of continuous monitoring activities, system reauthorization (if required), and activities to prepare the system and organization for future disruptions, breaches, compromises, or failures. Recovery and reconstitution capabilities can include automated mechanisms and manual procedures. Organizations establish recovery time and recovery point objectives as part of contingency planning.",
        "relatedControls": "CP-2, CP-4, CP-6, CP-7, CP-9, IR-4, SA-8, SC-24, SI-13."
    },
    {
        "controlIdentifier": "CP-5",
        "controlName": "Contingency Plan Update",
        "controlText": "[Withdrawn: Incorporated into CP-2.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "CP-10(2)",
        "controlName": "System Recovery and Reconstitution | Transaction Recovery",
        "controlText": "Implement transaction recovery for systems that are transaction-based.",
        "discussion": "Transaction-based systems include database management systems and transaction processing systems. Mechanisms supporting transaction recovery include transaction rollback and transaction journaling.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "CP-7(5)",
        "controlName": "Alternate Processing Site | Equivalent Information Security Safeguards",
        "controlText": "Withdrawn: Incorporated into CP-7.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "CP-10(4)",
        "controlName": "System Recovery and Reconstitution | Restore Within Time Period",
        "controlText": "Provide the capability to restore system components within [Assignment: organization-defined restoration time periods] from configuration-controlled and integrity-protected information representing a known, operational state for the components.",
        "discussion": "Restoration of system components includes reimaging, which restores the components to known, operational states.",
        "relatedControls": "CM-2, CM-6."
    },
    {
        "controlIdentifier": "CP-9(4)",
        "controlName": "System Backup | Protection from Unauthorized Modification",
        "controlText": "[Withdrawn: Incorporated into CP-9.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "CP-10(6)",
        "controlName": "System Recovery and Reconstitution | Component Protection",
        "controlText": "Protect system components used for recovery and reconstitution.",
        "discussion": "Protection of system recovery and reconstitution components (i.e., hardware, firmware, and software) includes physical and technical controls. Backup and restoration components used for recovery and reconstitution include router tables, compilers, and other system software.",
        "relatedControls": "AC-3, AC-6, MP-2, MP-4, PE-3, PE-6."
    },
    {
        "controlIdentifier": "CP-11",
        "controlName": "Alternate Communications Protocols",
        "controlText": "Provide the capability to employ [Assignment: organization-defined alternative communications protocols] in support of maintaining continuity of operations.",
        "discussion": "Contingency plans and the contingency training or testing associated with those plans incorporate an alternate communications protocol capability as part of establishing resilience in organizational systems. Switching communications protocols may affect software applications and operational aspects of systems. Organizations assess the potential side effects of introducing alternate communications protocols prior to implementation.",
        "relatedControls": "CP-2, CP-8, CP-13."
    },
    {
        "controlIdentifier": "CP-12",
        "controlName": "Safe Mode",
        "controlText": "When [Assignment: organization-defined conditions] are detected, enter a safe mode of operation with [Assignment: organization-defined restrictions of safe mode of operation].",
        "discussion": "For systems that support critical mission and business functions—including military operations, civilian space operations, nuclear power plant operations, and air traffic control operations (especially real-time operational environments)—organizations can identify certain conditions under which those systems revert to a predefined safe mode of operation. The safe mode of operation, which can be activated either automatically or manually, restricts the operations that systems can execute when those conditions are encountered. Restriction includes allowing only selected functions to execute that can be carried out under limited power or with reduced communications bandwidth.",
        "relatedControls": "CM-2, SA-8, SC-24, SI-13, SI-17."
    },
    {
        "controlIdentifier": "CP-13",
        "controlName": "Alternative Security Mechanisms",
        "controlText": "Employ [Assignment: organization-defined alternative or supplemental security mechanisms] for satisfying [Assignment: organization-defined security functions] when the primary means of implementing the security function is unavailable or compromised.",
        "discussion": "Use of alternative security mechanisms supports system resiliency, contingency planning, and continuity of operations. To ensure mission and business continuity, organizations can implement alternative or supplemental security mechanisms. The mechanisms may be less effective than the primary mechanisms. However, having the capability to readily employ alternative or supplemental mechanisms enhances mission and business continuity that might otherwise be adversely impacted if operations had to be curtailed until the primary means of implementing the functions was restored. Given the cost and level of effort required to provide such alternative capabilities, the alternative or supplemental mechanisms are only applied to critical security capabilities provided by systems, system components, or system services. For example, an organization may issue one-time pads to senior executives, officials, and system administrators if multi-factor tokens—the standard means for achieving secure authentication— are compromised.",
        "relatedControls": "CP-2, CP-11, SI-13."
    },
    {
        "controlIdentifier": "IA-2(4)",
        "controlName": "Identification and Authentication (organizational Users) | Local Access to Non-privileged Accounts",
        "controlText": "[Withdrawn: Incorporated into IA-2(2).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "IA-2(8)",
        "controlName": "Identification and Authentication (organizational Users) | Access to Accounts — Replay Resistant",
        "controlText": "Implement replay-resistant authentication mechanisms for access to [Selection (one or more): privileged accounts; non-privileged accounts].",
        "discussion": "Authentication processes resist replay attacks if it is impractical to achieve successful authentications by replaying previous authentication messages. Replay-resistant techniques include protocols that use nonces or challenges such as time synchronous or cryptographic authenticators.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IA-2(7)",
        "controlName": "Identification and Authentication (organizational Users) | Network Access to Non-privileged Accounts — Separate Device",
        "controlText": "[Withdrawn: Incorporated into IA-2(6).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "IA-2(10)",
        "controlName": "Identification and Authentication (organizational Users) | Single Sign-on",
        "controlText": "Provide a single sign-on capability for [Assignment: organization-defined system accounts and services].",
        "discussion": "Single sign-on enables users to log in once and gain access to multiple system resources. Organizations consider the operational efficiencies provided by single sign-on capabilities with the risk introduced by allowing access to multiple systems via a single authentication event. Single sign-on can present opportunities to improve system security, for example by providing the ability to add multi-factor authentication for applications and systems (existing and new) that may not be able to natively support multi-factor authentication.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IA-2(9)",
        "controlName": "Identification and Authentication (organizational Users) | Network Access to Non-privileged Accounts — Replay Resistant",
        "controlText": "[Withdrawn: Incorporated into IA-2(8).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "IA-2(12)",
        "controlName": "Identification and Authentication (organizational Users) | Acceptance of PIV Credentials",
        "controlText": "Accept and electronically verify Personal Identity Verification-compliant credentials.",
        "discussion": "Acceptance of Personal Identity Verification (PIV)-compliant credentials applies to organizations implementing logical access control and physical access control systems. PIV-compliant credentials are those credentials issued by federal agencies that conform to FIPS Publication 201 and supporting guidance documents. The adequacy and reliability of PIV card issuers are authorized using SP 800-79-2. Acceptance of PIV-compliant credentials includes derived PIV credentials, the use of which is addressed in SP 800-166. The DOD Common Access Card (CAC) is an example of a PIV credential.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IA-2(13)",
        "controlName": "Identification and Authentication (organizational Users) | Out-of-band Authentication",
        "controlText": "Implement the following out-of-band authentication mechanisms under [Assignment: organization-defined conditions]: [Assignment: organization-defined out-of-band authentication].",
        "discussion": "Out-of-band authentication refers to the use of two separate communication paths to identify and authenticate users or devices to an information system. The first path (i.e., the in-band path) is used to identify and authenticate users or devices and is generally the path through which information flows. The second path (i.e., the out-of-band path) is used to independently verify the authentication and/or requested action. For example, a user authenticates via a notebook computer to a remote server to which the user desires access and requests some action of the server via that communication path. Subsequently, the server contacts the user via the user’s cell phone to verify that the requested action originated from the user. The user may confirm the intended action to an individual on the telephone or provide an authentication code via the telephone. Out-of-band authentication can be used to mitigate actual or suspected man-in the-middle attacks. The conditions or criteria for activation include suspicious activities, new threat indicators, elevated threat levels, or the impact or classification level of information in requested transactions.",
        "relatedControls": "IA-10, IA-11, SC-37."
    },
    {
        "controlIdentifier": "IA-3",
        "controlName": "Device Identification and Authentication",
        "controlText": "Uniquely identify and authenticate [Assignment: organization-defined devices and/or types of devices] before establishing a [Selection (one or more): local; remote; network] connection.",
        "discussion": "Devices that require unique device-to-device identification and authentication are defined by type, device, or a combination of type and device. Organization-defined device types include devices that are not owned by the organization. Systems use shared known information (e.g., Media Access Control [MAC], Transmission Control Protocol/Internet Protocol [TCP/IP] addresses) for device identification or organizational authentication solutions (e.g., Institute of Electrical and Electronics Engineers (IEEE) 802.1x and Extensible Authentication Protocol [EAP], RADIUS server with EAP-Transport Layer Security [TLS] authentication, Kerberos) to identify and authenticate devices on local and wide area networks. Organizations determine the required strength of authentication mechanisms based on the security categories of systems and mission or business requirements. Because of the challenges of implementing device authentication on a large scale, organizations can restrict the application of the control to a limited number/type of devices based on mission or business needs.",
        "relatedControls": "AC-17, AC-18, AC-19, AU-6, CA-3, CA-9, IA-4, IA-5, IA-9, IA-11, SI-4."
    },
    {
        "controlIdentifier": "IA-3(1)",
        "controlName": "Device Identification and Authentication | Cryptographic Bidirectional Authentication",
        "controlText": "Authenticate [Assignment: organization-defined devices and/or types of devices] before establishing [Selection (one or more): local; remote; network] connection using bidirectional authentication that is cryptographically based.",
        "discussion": "A local connection is a connection with a device that communicates without the use of a network. A network connection is a connection with a device that communicates through a network. A remote connection is a connection with a device that communicates through an external network. Bidirectional authentication provides stronger protection to validate the identity of other devices for connections that are of greater risk.",
        "relatedControls": "SC-8, SC-12, SC-13."
    },
    {
        "controlIdentifier": "IA-3(2)",
        "controlName": "Device Identification and Authentication | Cryptographic Bidirectional Network Authentication",
        "controlText": "Withdrawn: Incorporated into IA-3(1).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "IA-3(4)",
        "controlName": "Device Identification and Authentication | Device Attestation",
        "controlText": "Handle device identification and authentication based on attestation by [Assignment: organization-defined configuration management process].",
        "discussion": "Device attestation refers to the identification and authentication of a device based on its configuration and known operating state. Device attestation can be determined via a cryptographic hash of the device. If device attestation is the means of identification and authentication, then it is important that patches and updates to the device are handled via a configuration management process such that the patches and updates are done securely and do not disrupt identification and authentication to other devices.",
        "relatedControls": "CM-2, CM-3, CM-6."
    },
    {
        "controlIdentifier": "IA-4(1)",
        "controlName": "Identifier Management | Prohibit Account Identifiers as Public Identifiers",
        "controlText": "Prohibit the use of system account identifiers that are the same as public identifiers for individual accounts.",
        "discussion": "Prohibiting account identifiers as public identifiers applies to any publicly disclosed account identifier used for communication such as, electronic mail and instant messaging. Prohibiting the use of systems account identifiers that are the same as some public identifier, such as the individual identifier section of an electronic mail address, makes it more difficult for adversaries to guess user identifiers. Prohibiting account identifiers as public identifiers without the implementation of other supporting controls only complicates guessing of identifiers. Additional protections are required for authenticators and credentials to protect the account.",
        "relatedControls": "AT-2, PT-7."
    },
    {
        "controlIdentifier": "IA-4(2)",
        "controlName": "Identifier Management | Supervisor Authorization",
        "controlText": "[Withdrawn: Incorporated into IA-12(1).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "IA-4(3)",
        "controlName": "Identifier Management | Multiple Forms of Certification",
        "controlText": "[Withdrawn: Incorporated into IA-12(2).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "IA-4(4)",
        "controlName": "Identifier Management | Identify User Status",
        "controlText": "Manage individual identifiers by uniquely identifying each individual as [Assignment: organization-defined characteristic identifying individual status].",
        "discussion": "Characteristics that identify the status of individuals include contractors, foreign nationals, and non-organizational users. Identifying the status of individuals by these characteristics provides additional information about the people with whom organizational personnel are communicating. For example, it might be useful for a government employee to know that one of the individuals on an email message is a contractor.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IA-4(5)",
        "controlName": "Identifier Management | Dynamic Management",
        "controlText": "Manage individual identifiers dynamically in accordance with [Assignment: organization-defined dynamic identifier policy].",
        "discussion": "In contrast to conventional approaches to identification that presume static accounts for preregistered users, many distributed systems establish identifiers at runtime for entities that were previously unknown. When identifiers are established at runtime for previously unknown entities, organizations can anticipate and provision for the dynamic establishment of identifiers. Pre-established trust relationships and mechanisms with appropriate authorities to validate credentials and related identifiers are essential.",
        "relatedControls": "AC-16."
    },
    {
        "controlIdentifier": "IA-4(6)",
        "controlName": "Identifier Management | Cross-organization Management",
        "controlText": "Coordinate with the following external organizations for cross-organization management of identifiers: [Assignment: organization-defined external organizations].",
        "discussion": "Cross-organization identifier management provides the capability to identify individuals, groups, roles, or devices when conducting cross-organization activities involving the processing, storage, or transmission of information.",
        "relatedControls": "AU-16, IA-2, IA-5."
    },
    {
        "controlIdentifier": "IA-4(7)",
        "controlName": "Identifier Management | In-person Registration",
        "controlText": "[Withdrawn: Incorporated into IA-12(4).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "IA-4(8)",
        "controlName": "Identifier Management | Pairwise Pseudonymous Identifiers",
        "controlText": "Generate pairwise pseudonymous identifiers.",
        "discussion": "A pairwise pseudonymous identifier is an opaque unguessable subscriber identifier generated by an identity provider for use at a specific individual relying party. Generating distinct pairwise pseudonymous identifiers with no identifying information about a subscriber discourages subscriber activity tracking and profiling beyond the operational requirements established by an organization. The pairwise pseudonymous identifiers are unique to each relying party except in situations where relying parties can show a demonstrable relationship justifying an operational need for correlation, or all parties consent to being correlated in such a manner.",
        "relatedControls": "IA-5."
    },
    {
        "controlIdentifier": "IA-4(9)",
        "controlName": "Identifier Management | Attribute Maintenance and Protection",
        "controlText": "Maintain the attributes for each uniquely identified individual, device, or service in [Assignment: organization-defined protected central storage].",
        "discussion": "For each of the entities covered in IA-2, IA-3, IA-8, and IA-9, it is important to maintain the attributes for each authenticated entity on an ongoing basis in a central (protected) store.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IA-5(11)",
        "controlName": "Authenticator Management | Hardware Token-based Authentication",
        "controlText": "[Withdrawn: Incorporated into IA-2(1) and IA-2(2).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "IA-5(3)",
        "controlName": "Authenticator Management | In-person or Trusted External Party Registration",
        "controlText": "[Withdrawn: Incorporated into IA-12(4).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "IA-5(5)",
        "controlName": "Authenticator Management | Change Authenticators Prior to Delivery",
        "controlText": "Require developers and installers of system components to provide unique authenticators or change default authenticators prior to delivery and installation.",
        "discussion": "Changing authenticators prior to the delivery and installation of system components extends the requirement for organizations to change default authenticators upon system installation by requiring developers and/or installers to provide unique authenticators or change default authenticators for system components prior to delivery and/or installation. However, it typically does not apply to developers of commercial off-the-shelf information technology products. Requirements for unique authenticators can be included in acquisition documents prepared by organizations when procuring systems or system components.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IA-5(6)",
        "controlName": "Authenticator Management | Protection of Authenticators",
        "controlText": "Protect authenticators commensurate with the security category of the information to which use of the authenticator permits access.",
        "discussion": "For systems that contain multiple security categories of information without reliable physical or logical separation between categories, authenticators used to grant access to the systems are protected commensurate with the highest security category of information on the systems. Security categories of information are determined as part of the security categorization process.",
        "relatedControls": "RA-2."
    },
    {
        "controlIdentifier": "IA-5(7)",
        "controlName": "Authenticator Management | No Embedded Unencrypted Static Authenticators",
        "controlText": "Ensure that unencrypted static authenticators are not embedded in applications or other forms of static storage.",
        "discussion": "In addition to applications, other forms of static storage include access scripts and function keys. Organizations exercise caution when determining whether embedded or stored authenticators are in encrypted or unencrypted form. If authenticators are used in the manner stored, then those representations are considered unencrypted authenticators.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IA-5(8)",
        "controlName": "Authenticator Management | Multiple System Accounts",
        "controlText": "Implement [Assignment: organization-defined security controls] to manage the risk of compromise due to individuals having accounts on multiple systems.",
        "discussion": "When individuals have accounts on multiple systems and use the same authenticators such as passwords, there is the risk that a compromise of one account may lead to the compromise of other accounts. Alternative approaches include having different authenticators (passwords) on all systems, employing a single sign-on or federation mechanism, or using some form of one-time passwords on all systems. Organizations can also use rules of behavior (see PL-4) and access agreements (see PS-6) to mitigate the risk of multiple system accounts.",
        "relatedControls": "PS-6."
    },
    {
        "controlIdentifier": "IA-5(9)",
        "controlName": "Authenticator Management | Federated Credential Management",
        "controlText": "Use the following external organizations to federate credentials: [Assignment: organization-defined external organizations].",
        "discussion": "Federation provides organizations with the capability to authenticate individuals and devices when conducting cross-organization activities involving the processing, storage, or transmission of information. Using a specific list of approved external organizations for authentication helps to ensure that those organizations are vetted and trusted.",
        "relatedControls": "AU-7, AU-16."
    },
    {
        "controlIdentifier": "IA-5(10)",
        "controlName": "Authenticator Management | Dynamic Credential Binding",
        "controlText": "Bind identities and authenticators dynamically using the following rules: [Assignment: organization-defined binding rules].",
        "discussion": "Authentication requires some form of binding between an identity and the authenticator that is used to confirm the identity. In conventional approaches, binding is established by pre-provisioning both the identity and the authenticator to the system. For example, the binding between a username (i.e., identity) and a password (i.e., authenticator) is accomplished by provisioning the identity and authenticator as a pair in the system. New authentication techniques allow the binding between the identity and the authenticator to be implemented external to a system. For example, with smartcard credentials, the identity and authenticator are bound together on the smartcard. Using these credentials, systems can authenticate identities that have not been pre-provisioned, dynamically provisioning the identity after authentication. In these situations, organizations can anticipate the dynamic provisioning of identities. Pre-established trust relationships and mechanisms with appropriate authorities to validate identities and related credentials are essential.",
        "relatedControls": "AU-16, IA-5."
    },
    {
        "controlIdentifier": "IA-5(4)",
        "controlName": "Authenticator Management | Automated Support for Password Strength Determination",
        "controlText": "[Withdrawn: Incorporated into IA-5(1).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "IA-5(12)",
        "controlName": "Authenticator Management | Biometric Authentication Performance",
        "controlText": "For biometric-based authentication, employ mechanisms that satisfy the following biometric quality requirements [Assignment: organization-defined biometric quality requirements].",
        "discussion": "Unlike password-based authentication, which provides exact matches of user-input passwords to stored passwords, biometric authentication does not provide exact matches. Depending on the type of biometric and the type of collection mechanism, there is likely to be some divergence from the presented biometric and the stored biometric that serves as the basis for comparison. Matching performance is the rate at which a biometric algorithm correctly results in a match for a genuine user and rejects other users. Biometric performance requirements include the match rate, which reflects the accuracy of the biometric matching algorithm used by a system.",
        "relatedControls": "AC-7."
    },
    {
        "controlIdentifier": "IA-5(13)",
        "controlName": "Authenticator Management | Expiration of Cached Authenticators",
        "controlText": "Prohibit the use of cached authenticators after [Assignment: organization-defined time period].",
        "discussion": "Cached authenticators are used to authenticate to the local machine when the network is not available. If cached authentication information is out of date, the validity of the authentication information may be questionable.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IA-5(14)",
        "controlName": "Authenticator Management | Managing Content of PKI Trust Stores",
        "controlText": "For PKI-based authentication, employ an organization-wide methodology for managing the content of PKI trust stores installed across all platforms, including networks, operating systems, browsers, and applications.",
        "discussion": "An organization-wide methodology for managing the content of PKI trust stores helps improve the accuracy and currency of PKI-based authentication credentials across the organization.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IA-5(15)",
        "controlName": "Authenticator Management | GSA-approved Products and Services",
        "controlText": "Use only General Services Administration-approved products and services for identity, credential, and access management.",
        "discussion": "General Services Administration (GSA)-approved products and services are products and services that have been approved through the GSA conformance program, where applicable, and posted to the GSA Approved Products List. GSA provides guidance for teams to design and build functional and secure systems that comply with Federal Identity, Credential, and Access Management (FICAM) policies, technologies, and implementation patterns.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IA-5(16)",
        "controlName": "Authenticator Management | In-person or Trusted External Party Authenticator Issuance",
        "controlText": "Require that the issuance of [Assignment: organization-defined types of and/or specific authenticators] be conducted [Selection: in person; by a trusted external party] before [Assignment: organization-defined registration authority] with authorization by [Assignment: organization-defined personnel or roles].",
        "discussion": "Issuing authenticators in person or by a trusted external party enhances and reinforces the trustworthiness of the identity proofing process.",
        "relatedControls": "IA-12."
    },
    {
        "controlIdentifier": "IA-5(17)",
        "controlName": "Authenticator Management | Presentation Attack Detection for Biometric Authenticators",
        "controlText": "Employ presentation attack detection mechanisms for biometric-based authentication.",
        "discussion": "Biometric characteristics do not constitute secrets. Such characteristics can be obtained by online web accesses, taking a picture of someone with a camera phone to obtain facial images with or without their knowledge, lifting from objects that someone has touched (e.g., a latent fingerprint), or capturing a high-resolution image (e.g., an iris pattern). Presentation attack detection technologies including liveness detection, can mitigate the risk of these types of attacks by making it difficult to produce artifacts intended to defeat the biometric sensor.",
        "relatedControls": "AC-7."
    },
    {
        "controlIdentifier": "IA-6",
        "controlName": "Authentication Feedback",
        "controlText": "Obscure feedback of authentication information during the authentication process to protect the information from possible exploitation and use by unauthorized individuals.",
        "discussion": "Authentication feedback from systems does not provide information that would allow unauthorized individuals to compromise authentication mechanisms. For some types of systems, such as desktops or notebooks with relatively large monitors, the threat (referred to as shoulder surfing) may be significant. For other types of systems, such as mobile devices with small displays, the threat may be less significant and is balanced against the increased likelihood of typographic input errors due to small keyboards. Thus, the means for obscuring authentication feedback is selected accordingly. Obscuring authentication feedback includes displaying asterisks when users type passwords into input devices or displaying feedback for a very limited time before obscuring it.",
        "relatedControls": "AC-3."
    },
    {
        "controlIdentifier": "IA-7",
        "controlName": "Cryptographic Module Authentication",
        "controlText": "Implement mechanisms for authentication to a cryptographic module that meet the requirements of applicable laws, executive orders, directives, policies, regulations, standards, and guidelines for such authentication.",
        "discussion": "Authentication mechanisms may be required within a cryptographic module to authenticate an operator accessing the module and to verify that the operator is authorized to assume the requested role and perform services within that role.",
        "relatedControls": "AC-3, IA-5, SA-4, SC-12, SC-13."
    },
    {
        "controlIdentifier": "IA-8",
        "controlName": "Identification and Authentication (non-organizational Users)",
        "controlText": "Uniquely identify and authenticate non-organizational users or processes acting on behalf of non-organizational users.",
        "discussion": "Non-organizational users include system users other than organizational users explicitly covered by IA-2. Non-organizational users are uniquely identified and authenticated for accesses other than those explicitly identified and documented in AC-14. Identification and authentication of non-organizational users accessing federal systems may be required to protect federal, proprietary, or privacy-related information (with exceptions noted for national security systems). Organizations consider many factors—including security, privacy, scalability, and practicality—when balancing the need to ensure ease of use for access to federal information and systems with the need to protect and adequately mitigate risk.",
        "relatedControls": "AC-2, AC-6, AC-14, AC-17, AC-18, AU-6, IA-2, IA-4, IA-5, IA-10, IA-11, MA-4, RA-3, SA-4, SC-8."
    },
    {
        "controlIdentifier": "IA-8(1)",
        "controlName": "Identification and Authentication (non-organizational Users) | Acceptance of PIV Credentials from Other Agencies",
        "controlText": "Accept and electronically verify Personal Identity Verification-compliant credentials from other federal agencies.",
        "discussion": "Acceptance of Personal Identity Verification (PIV) credentials from other federal agencies applies to both logical and physical access control systems. PIV credentials are those credentials issued by federal agencies that conform to FIPS Publication 201 and supporting guidelines. The adequacy and reliability of PIV card issuers are addressed and authorized using SP 800-79-2.",
        "relatedControls": "PE-3."
    },
    {
        "controlIdentifier": "IA-8(3)",
        "controlName": "Identification and Authentication (non-organizational Users) | Use of FICAM-approved Products",
        "controlText": "[Withdrawn: Incorporated into IA-8(2).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "IA-8(4)",
        "controlName": "Identification and Authentication (non-organizational Users) | Use of Defined Profiles",
        "controlText": "Conform to the following profiles for identity management [Assignment: organization-defined identity management profiles].",
        "discussion": "Organizations define profiles for identity management based on open identity management standards. To ensure that open identity management standards are viable, robust, reliable, sustainable, and interoperable as documented, the Federal Government assesses and scopes the standards and technology implementations against applicable laws, executive orders, directives, policies, regulations, standards, and guidelines.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IA-8(5)",
        "controlName": "Identification and Authentication (non-organizational Users) | Acceptance of PVI-I Credentials",
        "controlText": "Accept and verify federated or PKI credentials that meet [Assignment: organization-defined policy].",
        "discussion": "Acceptance of PIV-I credentials can be implemented by PIV, PIV-I, and other commercial or external identity providers. The acceptance and verification of PIV-I-compliant credentials apply to both logical and physical access control systems. The acceptance and verification of PIV-I credentials address nonfederal issuers of identity cards that desire to interoperate with United States Government PIV systems and that can be trusted by Federal Government-relying parties. The X.509 certificate policy for the Federal Bridge Certification Authority (FBCA) addresses PIV-I requirements. The PIV-I card is commensurate with the PIV credentials as defined in cited references. PIV-I credentials are the credentials issued by a PIV-I provider whose PIV-I certificate policy maps to the Federal Bridge PIV-I Certificate Policy. A PIV-I provider is cross-certified with the FBCA (directly or through another PKI bridge) with policies that have been mapped and approved as meeting the requirements of the PIV-I policies defined in the FBCA certificate policy.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IA-8(6)",
        "controlName": "Identification and Authentication (non-organizational Users) | Disassociability",
        "controlText": "Implement the following measures to disassociate user attributes or identifier assertion relationships among individuals, credential service providers, and relying parties: [Assignment: organization-defined measures].",
        "discussion": "Federated identity solutions can create increased privacy risks due to the tracking and profiling of individuals. Using identifier mapping tables or cryptographic techniques to blind credential service providers and relying parties from each other or to make identity attributes less visible to transmitting parties can reduce these privacy risks.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IA-9",
        "controlName": "Service Identification and Authentication",
        "controlText": "Uniquely identify and authenticate [Assignment: organization-defined system services and applications] before establishing communications with devices, users, or other services or applications.",
        "discussion": "Services that may require identification and authentication include web applications using digital certificates or services or applications that query a database. Identification and authentication methods for system services and applications include information or code signing, provenance graphs, and electronic signatures that indicate the sources of services. Decisions regarding the validity of identification and authentication claims can be made by services separate from the services acting on those decisions. This can occur in distributed system architectures. In such situations, the identification and authentication decisions (instead of actual identifiers and authentication data) are provided to the services that need to act on those decisions.",
        "relatedControls": "IA-3, IA-4, IA-5, SC-8."
    },
    {
        "controlIdentifier": "IA-9(1)",
        "controlName": "Service Identification and Authentication | Information Exchange",
        "controlText": "[Withdrawn: Incorporated into IA-9.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "IA-9(2)",
        "controlName": "Service Identification and Authentication | Transmission of Decisions",
        "controlText": "[Withdrawn: Incorporated into IA-9.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "IA-10",
        "controlName": "Adaptive Authentication",
        "controlText": "Require individuals accessing the system to employ [Assignment: organization-defined supplemental authentication techniques or mechanisms] under specific [Assignment: organization-defined circumstances or situations].",
        "discussion": "Adversaries may compromise individual authentication mechanisms employed by organizations and subsequently attempt to impersonate legitimate users. To address this threat, organizations may employ specific techniques or mechanisms and establish protocols to assess suspicious behavior. Suspicious behavior may include accessing information that individuals do not typically access as part of their duties, roles, or responsibilities; accessing greater quantities of information than individuals would routinely access; or attempting to access information from suspicious network addresses. When pre-established conditions or triggers occur, organizations can require individuals to provide additional authentication information. Another potential use for adaptive authentication is to increase the strength of mechanism based on the number or types of records being accessed. Adaptive authentication does not replace and is not used to avoid the use of multi-factor authentication mechanisms but can augment implementations of multi-factor authentication.",
        "relatedControls": "IA-2, IA-8."
    },
    {
        "controlIdentifier": "IA-11",
        "controlName": "Re-authentication",
        "controlText": "Require users to re-authenticate when [Assignment: organization-defined circumstances or situations requiring re-authentication].",
        "discussion": "In addition to the re-authentication requirements associated with device locks, organizations may require re-authentication of individuals in certain situations, including when roles, authenticators or credentials change, when security categories of systems change, when the execution of privileged functions occurs, after a fixed time period, or periodically.",
        "relatedControls": "AC-3, AC-11, IA-2, IA-3, IA-4, IA-8."
    },
    {
        "controlIdentifier": "IA-12(1)",
        "controlName": "Identity Proofing | Supervisor Authorization",
        "controlText": "Require that the registration process to receive an account for logical access includes supervisor or sponsor authorization.",
        "discussion": "Including supervisor or sponsor authorization as part of the registration process provides an additional level of scrutiny to ensure that the user’s management chain is aware of the account, the account is essential to carry out organizational missions and functions, and the user’s privileges are appropriate for the anticipated responsibilities and authorities within the organization.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IA-12(2)",
        "controlName": "Identity Proofing | Identity Evidence",
        "controlText": "Require evidence of individual identification be presented to the registration authority.",
        "discussion": "Identity evidence, such as documentary evidence or a combination of documents and biometrics, reduces the likelihood of individuals using fraudulent identification to establish an identity or at least increases the work factor of potential adversaries. The forms of acceptable evidence are consistent with the risks to the systems, roles, and privileges associated with the user’s account.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IA-12(3)",
        "controlName": "Identity Proofing | Identity Evidence Validation and Verification",
        "controlText": "Require that the presented identity evidence be validated and verified through [Assignment: organizational defined methods of validation and verification].",
        "discussion": "Validation and verification of identity evidence increases the assurance that accounts and identifiers are being established for the correct user and authenticators are being bound to that user. Validation refers to the process of confirming that the evidence is genuine and authentic, and the data contained in the evidence is correct, current, and related to an individual. Verification confirms and establishes a linkage between the claimed identity and the actual existence of the user presenting the evidence. Acceptable methods for validating and verifying identity evidence are consistent with the risks to the systems, roles, and privileges associated with the users account.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IA-12(4)",
        "controlName": "Identity Proofing | In-person Validation and Verification",
        "controlText": "Require that the validation and verification of identity evidence be conducted in person before a designated registration authority.",
        "discussion": "In-person proofing reduces the likelihood of fraudulent credentials being issued because it requires the physical presence of individuals, the presentation of physical identity documents, and actual face-to-face interactions with designated registration authorities.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IA-12(5)",
        "controlName": "Identity Proofing | Address Confirmation",
        "controlText": "Require that a [Selection: registration code; notice of proofing] be delivered through an out-of-band channel to verify the users address (physical or digital) of record.",
        "discussion": "To make it more difficult for adversaries to pose as legitimate users during the identity proofing process, organizations can use out-of-band methods to ensure that the individual associated with an address of record is the same individual that participated in the registration. Confirmation can take the form of a temporary enrollment code or a notice of proofing. The delivery address for these artifacts is obtained from records and not self-asserted by the user. The address can include a physical or digital address. A home address is an example of a physical address. Email addresses and telephone numbers are examples of digital addresses.",
        "relatedControls": "IA-12."
    },
    {
        "controlIdentifier": "IA-12(6)",
        "controlName": "Identity Proofing | Accept Externally-proofed Identities",
        "controlText": "Accept externally-proofed identities at [Assignment: organization-defined identity assurance level].",
        "discussion": "To limit unnecessary re-proofing of identities, particularly of non-PIV users, organizations accept proofing conducted at a commensurate level of assurance by other agencies or organizations. Proofing is consistent with organizational security policy and the identity assurance level appropriate for the system, application, or information accessed. Accepting externally-proofed identities is a fundamental component of managing federated identities across agencies and organizations.",
        "relatedControls": "IA-3, IA-4, IA-5, IA-8."
    },
    {
        "controlIdentifier": "IR-2(1)",
        "controlName": "Incident Response Training | Simulated Events",
        "controlText": "Incorporate simulated events into incident response training to facilitate the required response by personnel in crisis situations.",
        "discussion": "Organizations establish requirements for responding to incidents in incident response plans. Incorporating simulated events into incident response training helps to ensure that personnel understand their individual responsibilities and what specific actions to take in crisis situations.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IR-2(2)",
        "controlName": "Incident Response Training | Automated Training Environments",
        "controlText": "Provide an incident response training environment using [Assignment: organization-defined automated mechanisms].",
        "discussion": "Automated mechanisms can provide a more thorough and realistic incident response training environment. This can be accomplished, for example, by providing more complete coverage of incident response issues, selecting more realistic training scenarios and environments, and stressing the response capability.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IR-2(3)",
        "controlName": "Incident Response Training | Breach",
        "controlText": "Provide incident response training on how to identify and respond to a breach, including the organization’s process for reporting a breach.",
        "discussion": "For federal agencies, an incident that involves personally identifiable information is considered a breach. A breach results in the loss of control, compromise, unauthorized disclosure, unauthorized acquisition, or a similar occurrence where a person other than an authorized user accesses or potentially accesses personally identifiable information or an authorized user accesses or potentially accesses such information for other than authorized purposes. The incident response training emphasizes the obligation of individuals to report both confirmed and suspected breaches involving information in any medium or form, including paper, oral, and electronic. Incident response training includes tabletop exercises that simulate a breach. See IR-2(1).",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IR-3",
        "controlName": "Incident Response Testing",
        "controlText": "Test the effectiveness of the incident response capability for the system [Assignment: organization-defined frequency] using the following tests: [Assignment: organization-defined tests].",
        "discussion": "Organizations test incident response capabilities to determine their effectiveness and identify potential weaknesses or deficiencies. Incident response testing includes the use of checklists, walk-through or tabletop exercises, and simulations (parallel or full interrupt). Incident response testing can include a determination of the effects on organizational operations and assets and individuals due to incident response. The use of qualitative and quantitative data aids in determining the effectiveness of incident response processes.",
        "relatedControls": "CP-3, CP-4, IR-2, IR-4, IR-8, PM-14."
    },
    {
        "controlIdentifier": "IR-3(1)",
        "controlName": "Incident Response Testing | Automated Testing",
        "controlText": "Test the incident response capability using [Assignment: organization-defined automated mechanisms].",
        "discussion": "Organizations use automated mechanisms to more thoroughly and effectively test incident response capabilities. This can be accomplished by providing more complete coverage of incident response issues, selecting realistic test scenarios and environments, and stressing the response capability.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IR-3(2)",
        "controlName": "Incident Response Testing | Coordination with Related Plans",
        "controlText": "Coordinate incident response testing with organizational elements responsible for related plans.",
        "discussion": "Organizational plans related to incident response testing include business continuity plans, disaster recovery plans, continuity of operations plans, contingency plans, crisis communications plans, critical infrastructure plans, and occupant emergency plans.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IR-4(1)",
        "controlName": "Incident Handling | Automated Incident Handling Processes",
        "controlText": "Support the incident handling process using [Assignment: organization-defined automated mechanisms].",
        "discussion": "Automated mechanisms that support incident handling processes include online incident management systems and tools that support the collection of live response data, full network packet capture, and forensic analysis.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IR-4(2)",
        "controlName": "Incident Handling | Dynamic Reconfiguration",
        "controlText": "Include the following types of dynamic reconfiguration for [Assignment: organization-defined system components] as part of the incident response capability: [Assignment: organization-defined types of dynamic reconfiguration].",
        "discussion": "Dynamic reconfiguration includes changes to router rules, access control lists, intrusion detection or prevention system parameters, and filter rules for guards or firewalls. Organizations may perform dynamic reconfiguration of systems to stop attacks, misdirect attackers, and isolate components of systems, thus limiting the extent of the damage from breaches or compromises. Organizations include specific time frames for achieving the reconfiguration of systems in the definition of the reconfiguration capability, considering the potential need for rapid response to effectively address cyber threats.",
        "relatedControls": "AC-2, AC-4, CM-2."
    },
    {
        "controlIdentifier": "IR-4(3)",
        "controlName": "Incident Handling | Continuity of Operations",
        "controlText": "Identify [Assignment: organization-defined classes of incidents] and take the following actions in response to those incidents to ensure continuation of organizational mission and business functions: [Assignment: organization-defined actions to take in response to classes of incidents].",
        "discussion": "Classes of incidents include malfunctions due to design or implementation errors and omissions, targeted malicious attacks, and untargeted malicious attacks. Incident response actions include orderly system degradation, system shutdown, fall back to manual mode or activation of alternative technology whereby the system operates differently, employing deceptive measures, alternate information flows, or operating in a mode that is reserved for when systems are under attack. Organizations consider whether continuity of operations requirements during an incident conflict with the capability to automatically disable the system as specified as part of IR-4(5).",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IR-4(4)",
        "controlName": "Incident Handling | Information Correlation",
        "controlText": "Correlate incident information and individual incident responses to achieve an organization-wide perspective on incident awareness and response.",
        "discussion": "Sometimes, a threat event, such as a hostile cyber-attack, can only be observed by bringing together information from different sources, including various reports and reporting procedures established by organizations.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IR-4(5)",
        "controlName": "Incident Handling | Automatic Disabling of System",
        "controlText": "Implement a configurable capability to automatically disable the system if [Assignment: organization-defined security violations] are detected.",
        "discussion": "Organizations consider whether the capability to automatically disable the system conflicts with continuity of operations requirements specified as part of CP-2 or IR-4(3). Security violations include cyber-attacks that have compromised the integrity of the system or exfiltrated organizational information and serious errors in software programs that could adversely impact organizational missions or functions or jeopardize the safety of individuals.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IR-4(6)",
        "controlName": "Incident Handling | Insider Threats",
        "controlText": "Implement an incident handling capability for incidents involving insider threats.",
        "discussion": "Explicit focus on handling incidents involving insider threats provides additional emphasis on this type of threat and the need for specific incident handling capabilities to provide appropriate and timely responses.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IR-4(7)",
        "controlName": "Incident Handling | Insider Threats — Intra-organization Coordination",
        "controlText": "Coordinate an incident handling capability for insider threats that includes the following organizational entities [Assignment: organization-defined entities].",
        "discussion": "Incident handling for insider threat incidents (e.g., preparation, detection and analysis, containment, eradication, and recovery) requires coordination among many organizational entities, including mission or business owners, system owners, human resources offices, procurement offices, personnel offices, physical security offices, senior agency information security officer, operations personnel, risk executive (function), senior agency official for privacy, and legal counsel. In addition, organizations may require external support from federal, state, and local law enforcement agencies.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IR-4(8)",
        "controlName": "Incident Handling | Correlation with External Organizations",
        "controlText": "Coordinate with [Assignment: organization-defined external organizations] to correlate and share [Assignment: organization-defined incident information] to achieve a cross-organization perspective on incident awareness and more effective incident responses.",
        "discussion": "The coordination of incident information with external organizations—including mission or business partners, military or coalition partners, customers, and developers—can provide significant benefits. Cross-organizational coordination can serve as an important risk management capability. This capability allows organizations to leverage information from a variety of sources to effectively respond to incidents and breaches that could potentially affect the organization’s operations, assets, and individuals.",
        "relatedControls": "AU-16, PM-16."
    },
    {
        "controlIdentifier": "IR-4(9)",
        "controlName": "Incident Handling | Dynamic Response Capability",
        "controlText": "Employ [Assignment: organization-defined dynamic response capabilities] to respond to incidents.",
        "discussion": "The dynamic response capability addresses the timely deployment of new or replacement organizational capabilities in response to incidents. This includes capabilities implemented at the mission and business process level and at the system level.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IR-4(10)",
        "controlName": "Incident Handling | Supply Chain Coordination",
        "controlText": "Coordinate incident handling activities involving supply chain events with other organizations involved in the supply chain.",
        "discussion": "Organizations involved in supply chain activities include product developers, system integrators, manufacturers, packagers, assemblers, distributors, vendors, and resellers. Supply chain incidents can occur anywhere through or to the supply chain and include compromises or breaches that involve primary or sub-tier providers, information technology products, system components, development processes or personnel, and distribution processes or warehousing facilities. Organizations consider including processes for protecting and sharing incident information in information exchange agreements and their obligations for reporting incidents to government oversight bodies (e.g., Federal Acquisition Security Council).",
        "relatedControls": "CA-3, MA-2, SA-9, SR-8."
    },
    {
        "controlIdentifier": "IR-4(12)",
        "controlName": "Incident Handling | Malicious Code and Forensic Analysis",
        "controlText": "Analyze malicious code and/or other residual artifacts remaining in the system after the incident.",
        "discussion": "When conducted carefully in an isolated environment, analysis of malicious code and other residual artifacts of a security incident or breach can give the organization insight into adversary tactics, techniques, and procedures. It can also indicate the identity or some defining characteristics of the adversary. In addition, malicious code analysis can help the organization develop responses to future incidents.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IR-4(13)",
        "controlName": "Incident Handling | Behavior Analysis",
        "controlText": "Analyze anomalous or suspected adversarial behavior in or related to [Assignment: organization-defined environments or resources].",
        "discussion": "If the organization maintains a deception environment, an analysis of behaviors in that environment, including resources targeted by the adversary and timing of the incident or event, can provide insight into adversarial tactics, techniques, and procedures. External to a deception environment, the analysis of anomalous adversarial behavior (e.g., changes in system performance or usage patterns) or suspected behavior (e.g., changes in searches for the location of specific resources) can give the organization such insight.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IR-4(14)",
        "controlName": "Incident Handling | Security Operations Center",
        "controlText": "Establish and maintain a security operations center.",
        "discussion": "A security operations center (SOC) is the focal point for security operations and computer network defense for an organization. The purpose of the SOC is to defend and monitor an organization’s systems and networks (i.e., cyber infrastructure) on an ongoing basis. The SOC is also responsible for detecting, analyzing, and responding to cybersecurity incidents in a timely manner. The organization staffs the SOC with skilled technical and operational personnel (e.g., security analysts, incident response personnel, systems security engineers) and implements a combination of technical, management, and operational controls (including monitoring, scanning, and forensics tools) to monitor, fuse, correlate, analyze, and respond to threat and security-relevant event data from multiple sources. These sources include perimeter defenses, network devices (e.g., routers, switches), and endpoint agent data feeds. The SOC provides a holistic situational awareness capability to help organizations determine the security posture of the system and organization. A SOC capability can be obtained in a variety of ways. Larger organizations may implement a dedicated SOC while smaller organizations may employ third-party organizations to provide such a capability.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IR-5",
        "controlName": "Incident Monitoring",
        "controlText": "Track and document incidents.",
        "discussion": "Documenting incidents includes maintaining records about each incident, the status of the incident, and other pertinent information necessary for forensics as well as evaluating incident details, trends, and handling. Incident information can be obtained from a variety of sources, including network monitoring, incident reports, incident response teams, user complaints, supply chain partners, audit monitoring, physical access monitoring, and user and administrator reports. IR-4 provides information on the types of incidents that are appropriate for monitoring.",
        "relatedControls": "AU-6, AU-7, IR-4, IR-6, IR-8, PE-6, PM-5, SC-5, SC-7, SI-3, SI-4, SI-7."
    },
    {
        "controlIdentifier": "IR-5(1)",
        "controlName": "Incident Monitoring | Automated Tracking, Data Collection, and Analysis",
        "controlText": "Track incidents and collect and analyze incident information using [Assignment: organization-defined automated mechanisms].",
        "discussion": "Automated mechanisms for tracking incidents and collecting and analyzing incident information include Computer Incident Response Centers or other electronic databases of incidents and network monitoring devices.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IR-6(1)",
        "controlName": "Incident Reporting | Automated Reporting",
        "controlText": "Report incidents using [Assignment: organization-defined automated mechanisms].",
        "discussion": "The recipients of incident reports are specified in IR-6b. Automated reporting mechanisms include email, posting on websites (with automatic updates), and automated incident response tools and programs.",
        "relatedControls": "IR-7."
    },
    {
        "controlIdentifier": "IR-6(2)",
        "controlName": "Incident Reporting | Vulnerabilities Related to Incidents",
        "controlText": "Report system vulnerabilities associated with reported incidents to [Assignment: organization-defined personnel or roles].",
        "discussion": "Reported incidents that uncover system vulnerabilities are analyzed by organizational personnel including system owners, mission and business owners, senior agency information security officers, senior agency officials for privacy, authorizing officials, and the risk executive (function). The analysis can serve to prioritize and initiate mitigation actions to address the discovered system vulnerability.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IR-6(3)",
        "controlName": "Incident Reporting | Supply Chain Coordination",
        "controlText": "Provide incident information to the provider of the product or service and other organizations involved in the supply chain or supply chain governance for systems or system components related to the incident.",
        "discussion": "Organizations involved in supply chain activities include product developers, system integrators, manufacturers, packagers, assemblers, distributors, vendors, and resellers. Entities that provide supply chain governance include the Federal Acquisition Security Council (FASC). Supply chain incidents include compromises or breaches that involve information technology products, system components, development processes or personnel, distribution processes, or warehousing facilities. Organizations determine the appropriate information to share and consider the value gained from informing external organizations about supply chain incidents, including the ability to improve processes or to identify the root cause of an incident.",
        "relatedControls": "SR-8."
    },
    {
        "controlIdentifier": "IR-7",
        "controlName": "Incident Response Assistance",
        "controlText": "Provide an incident response support resource, integral to the organizational incident response capability, that offers advice and assistance to users of the system for the handling and reporting of incidents.",
        "discussion": "Incident response support resources provided by organizations include help desks, assistance groups, automated ticketing systems to open and track incident response tickets, and access to forensics services or consumer redress services, when required.",
        "relatedControls": "AT-2, AT-3, IR-4, IR-6, IR-8, PM-22, PM-26, SA-9, SI-18."
    },
    {
        "controlIdentifier": "IR-7(1)",
        "controlName": "Incident Response Assistance | Automation Support for Availability of Information and Support",
        "controlText": "Increase the availability of incident response information and support using [Assignment: organization-defined automated mechanisms].",
        "discussion": "Automated mechanisms can provide a push or pull capability for users to obtain incident response assistance. For example, individuals may have access to a website to query the assistance capability, or the assistance capability can proactively send incident response information to users (general distribution or targeted) as part of increasing understanding of current response capabilities and support.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IR-10",
        "controlName": "Integrated Information Security Analysis Team",
        "controlText": "[Withdrawn: Moved to IR-4(11).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "IR-9(2)",
        "controlName": "Information Spillage Response | Training",
        "controlText": "Provide information spillage response training [Assignment: organization-defined frequency].",
        "discussion": "Organizations establish requirements for responding to information spillage incidents in incident response plans. Incident response training on a regular basis helps to ensure that organizational personnel understand their individual responsibilities and what specific actions to take when spillage incidents occur.",
        "relatedControls": "AT-2, AT-3, CP-3, IR-2."
    },
    {
        "controlIdentifier": "IR-9(3)",
        "controlName": "Information Spillage Response | Post-spill Operations",
        "controlText": "Implement the following procedures to ensure that organizational personnel impacted by information spills can continue to carry out assigned tasks while contaminated systems are undergoing corrective actions: [Assignment: organization-defined procedures].",
        "discussion": "Corrective actions for systems contaminated due to information spillages may be time-consuming. Personnel may not have access to the contaminated systems while corrective actions are being taken, which may potentially affect their ability to conduct organizational business.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IR-9(4)",
        "controlName": "Information Spillage Response | Exposure to Unauthorized Personnel",
        "controlText": "Employ the following controls for personnel exposed to information not within assigned access authorizations: [Assignment: organization-defined controls].",
        "discussion": "Controls include ensuring that personnel who are exposed to spilled information are made aware of the laws, executive orders, directives, regulations, policies, standards, and guidelines regarding the information and the restrictions imposed based on exposure to such information.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "IR-9(1)",
        "controlName": "Information Spillage Response | Responsible Personnel",
        "controlText": "[Withdrawn: Incorporated into IR-9.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "MA-2(1)",
        "controlName": "Controlled Maintenance | Record Content",
        "controlText": "[Withdrawn: Incorporated into MA-2.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "MA-3(1)",
        "controlName": "Maintenance Tools | Inspect Tools",
        "controlText": "Inspect the maintenance tools used by maintenance personnel for improper or unauthorized modifications.",
        "discussion": "Maintenance tools can be directly brought into a facility by maintenance personnel or downloaded from a vendor’s website. If, upon inspection of the maintenance tools, organizations determine that the tools have been modified in an improper manner or the tools contain malicious code, the incident is handled consistent with organizational policies and procedures for incident handling.",
        "relatedControls": "SI-7."
    },
    {
        "controlIdentifier": "MA-3(2)",
        "controlName": "Maintenance Tools | Inspect Media",
        "controlText": "Check media containing diagnostic and test programs for malicious code before the media are used in the system.",
        "discussion": "If, upon inspection of media containing maintenance, diagnostic, and test programs, organizations determine that the media contains malicious code, the incident is handled consistent with organizational incident handling policies and procedures.",
        "relatedControls": "SI-3."
    },
    {
        "controlIdentifier": "MA-3(4)",
        "controlName": "Maintenance Tools | Restricted Tool Use",
        "controlText": "Restrict the use of maintenance tools to authorized personnel only.",
        "discussion": "Restricting the use of maintenance tools to only authorized personnel applies to systems that are used to carry out maintenance functions.",
        "relatedControls": "AC-3, AC-5, AC-6."
    },
    {
        "controlIdentifier": "MA-3(5)",
        "controlName": "Maintenance Tools | Execution with Privilege",
        "controlText": "Monitor the use of maintenance tools that execute with increased privilege.",
        "discussion": "Maintenance tools that execute with increased system privilege can result in unauthorized access to organizational information and assets that would otherwise be inaccessible.",
        "relatedControls": "AC-3, AC-6."
    },
    {
        "controlIdentifier": "MA-3(6)",
        "controlName": "Maintenance Tools | Software Updates and Patches",
        "controlText": "Inspect maintenance tools to ensure the latest software updates and patches are installed.",
        "discussion": "Maintenance tools using outdated and/or unpatched software can provide a threat vector for adversaries and result in a significant vulnerability for organizations.",
        "relatedControls": "AC-3, AC-6."
    },
    {
        "controlIdentifier": "MA-5(2)",
        "controlName": "Maintenance Personnel | Security Clearances for Classified Systems",
        "controlText": "Verify that personnel performing maintenance and diagnostic activities on a system processing, storing, or transmitting classified information possess security clearances and formal access approvals for at least the highest classification level and for compartments of information on the system.",
        "discussion": "Personnel who conduct maintenance on organizational systems may be exposed to classified information during the course of their maintenance activities. To mitigate the inherent risk of such exposure, organizations use maintenance personnel that are cleared (i.e., possess security clearances) to the classification level of the information stored on the system.",
        "relatedControls": "PS-3."
    },
    {
        "controlIdentifier": "MA-5(3)",
        "controlName": "Maintenance Personnel | Citizenship Requirements for Classified Systems",
        "controlText": "Verify that personnel performing maintenance and diagnostic activities on a system processing, storing, or transmitting classified information are U.S. citizens.",
        "discussion": "Personnel who conduct maintenance on organizational systems may be exposed to classified information during the course of their maintenance activities. If access to classified information on organizational systems is restricted to U.S. citizens, the same restriction is applied to personnel performing maintenance on those systems.",
        "relatedControls": "PS-3."
    },
    {
        "controlIdentifier": "PE-2(1)",
        "controlName": "Physical Access Authorizations | Access by Position or Role",
        "controlText": "Authorize physical access to the facility where the system resides based on position or role.",
        "discussion": "Role-based facility access includes access by authorized permanent and regular/routine maintenance personnel, duty officers, and emergency medical staff.",
        "relatedControls": "AC-2, AC-3, AC-6."
    },
    {
        "controlIdentifier": "PE-2(2)",
        "controlName": "Physical Access Authorizations | Two Forms of Identification",
        "controlText": "Require two forms of identification from the following forms of identification for visitor access to the facility where the system resides: [Assignment: organization-defined list of acceptable forms of identification].",
        "discussion": "Acceptable forms of identification include passports, REAL ID-compliant drivers’ licenses, and Personal Identity Verification (PIV) cards. For gaining access to facilities using automated mechanisms, organizations may use PIV cards, key cards, PINs, and biometrics.",
        "relatedControls": "IA-2, IA-4, IA-5."
    },
    {
        "controlIdentifier": "PE-2(3)",
        "controlName": "Physical Access Authorizations | Restrict Unescorted Access",
        "controlText": "Restrict unescorted access to the facility where the system resides to personnel with [Selection (one or more): security clearances for all information contained within the system; formal access authorizations for all information contained within the system; need for access to all information contained within the system; [Assignment: organization-defined physical access authorizations]].",
        "discussion": "Individuals without required security clearances, access approvals, or need to know are escorted by individuals with appropriate physical access authorizations to ensure that information is not exposed or otherwise compromised.",
        "relatedControls": "PS-2, PS-6."
    },
    {
        "controlIdentifier": "PE-3(1)",
        "controlName": "Physical Access Control | System Access",
        "controlText": "Enforce physical access authorizations to the system in addition to the physical access controls for the facility at [Assignment: organization-defined physical spaces containing one or more components of the system].",
        "discussion": "Control of physical access to the system provides additional physical security for those areas within facilities where there is a concentration of system components.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "PE-3(2)",
        "controlName": "Physical Access Control | Facility and Systems",
        "controlText": "Perform security checks [Assignment: organization-defined frequency] at the physical perimeter of the facility or system for exfiltration of information or removal of system components.",
        "discussion": "Organizations determine the extent, frequency, and/or randomness of security checks to adequately mitigate risk associated with exfiltration.",
        "relatedControls": "AC-4, SC-7."
    },
    {
        "controlIdentifier": "PE-3(3)",
        "controlName": "Physical Access Control | Continuous Guards",
        "controlText": "Employ guards to control [Assignment: organization-defined physical access points] to the facility where the system resides 24 hours per day, 7 days per week.",
        "discussion": "Employing guards at selected physical access points to the facility provides a more rapid response capability for organizations. Guards also provide the opportunity for human surveillance in areas of the facility not covered by video surveillance.",
        "relatedControls": "CP-6, CP-7, PE-6."
    },
    {
        "controlIdentifier": "PE-3(4)",
        "controlName": "Physical Access Control | Lockable Casings",
        "controlText": "Use lockable physical casings to protect [Assignment: organization-defined system components] from unauthorized physical access.",
        "discussion": "The greatest risk from the use of portable devices—such as smart phones, tablets, and notebook computers—is theft. Organizations can employ lockable, physical casings to reduce or eliminate the risk of equipment theft. Such casings come in a variety of sizes, from units that protect a single notebook computer to full cabinets that can protect multiple servers, computers, and peripherals. Lockable physical casings can be used in conjunction with cable locks or lockdown plates to prevent the theft of the locked casing containing the computer equipment.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "PE-3(5)",
        "controlName": "Physical Access Control | Tamper Protection",
        "controlText": "Employ [Assignment: organization-defined anti-tamper technologies] to [Selection (one or more): detect; prevent] physical tampering or alteration of [Assignment: organization-defined hardware components] within the system.",
        "discussion": "Organizations can implement tamper detection and prevention at selected hardware components or implement tamper detection at some components and tamper prevention at other components. Detection and prevention activities can employ many types of anti-tamper technologies, including tamper-detection seals and anti-tamper coatings. Anti-tamper programs help to detect hardware alterations through counterfeiting and other supply chain-related risks.",
        "relatedControls": "SA-16, SR-9, SR-11."
    },
    {
        "controlIdentifier": "PE-10(1)",
        "controlName": "Emergency Shutoff | Accidental and Unauthorized Activation",
        "controlText": "[Withdrawn: Incorporated into PE-10.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "PE-3(7)",
        "controlName": "Physical Access Control | Physical Barriers",
        "controlText": "Limit access using physical barriers.",
        "discussion": "Physical barriers include bollards, concrete slabs, jersey walls, and hydraulic active vehicle barriers.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "PE-3(8)",
        "controlName": "Physical Access Control | Access Control Vestibules",
        "controlText": "Employ access control vestibules at [Assignment: organization-defined locations within the facility].",
        "discussion": "An access control vestibule is part of a physical access control system that typically provides a space between two sets of interlocking doors. Vestibules are designed to prevent unauthorized individuals from following authorized individuals into facilities with controlled access. This activity, also known as piggybacking or tailgating, results in unauthorized access to the facility. Interlocking door controllers can be used to limit the number of individuals who enter controlled access points and to provide containment areas while authorization for physical access is verified. Interlocking door controllers can be fully automated (i.e., controlling the opening and closing of the doors) or partially automated (i.e., using security guards to control the number of individuals entering the containment area).",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "PE-4",
        "controlName": "Access Control for Transmission",
        "controlText": "Control physical access to [Assignment: organization-defined system distribution and transmission lines] within organizational facilities using [Assignment: organization-defined security controls].",
        "discussion": "Security controls applied to system distribution and transmission lines prevent accidental damage, disruption, and physical tampering. Such controls may also be necessary to prevent eavesdropping or modification of unencrypted transmissions. Security controls used to control physical access to system distribution and transmission lines include disconnected or locked spare jacks, locked wiring closets, protection of cabling by conduit or cable trays, and wiretapping sensors.",
        "relatedControls": "AT-3, IA-4, MP-2, MP-4, PE-2, PE-3, PE-5, PE-9, SC-7, SC-8."
    },
    {
        "controlIdentifier": "PE-5",
        "controlName": "Access Control for Output Devices",
        "controlText": "Control physical access to output from [Assignment: organization-defined output devices] to prevent unauthorized individuals from obtaining the output.",
        "discussion": "Controlling physical access to output devices includes placing output devices in locked rooms or other secured areas with keypad or card reader access controls and allowing access to authorized individuals only, placing output devices in locations that can be monitored by personnel, installing monitor or screen filters, and using headphones. Examples of output devices include monitors, printers, scanners, audio devices, facsimile machines, and copiers.",
        "relatedControls": "PE-2, PE-3, PE-4, PE-18."
    },
    {
        "controlIdentifier": "PE-13(3)",
        "controlName": "Fire Protection | Automatic Fire Suppression",
        "controlText": "[Withdrawn: Incorporated into PE-13(2).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "PE-5(2)",
        "controlName": "Access Control for Output Devices | Link to Individual Identity",
        "controlText": "Link individual identity to receipt of output from output devices.",
        "discussion": "Methods for linking individual identity to the receipt of output from output devices include installing security functionality on facsimile machines, copiers, and printers. Such functionality allows organizations to implement authentication on output devices prior to the release of output to individuals.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "PE-18(1)",
        "controlName": "Location of System Components | Facility Site",
        "controlText": "[Withdrawn: Moved to PE-23.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "PE-6(1)",
        "controlName": "Monitoring Physical Access | Intrusion Alarms and Surveillance Equipment",
        "controlText": "Monitor physical access to the facility where the system resides using physical intrusion alarms and surveillance equipment.",
        "discussion": "Physical intrusion alarms can be employed to alert security personnel when unauthorized access to the facility is attempted. Alarm systems work in conjunction with physical barriers, physical access control systems, and security guards by triggering a response when these other forms of security have been compromised or breached. Physical intrusion alarms can include different types of sensor devices, such as motion sensors, contact sensors, and broken glass sensors. Surveillance equipment includes video cameras installed at strategic locations throughout the facility.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "PE-6(2)",
        "controlName": "Monitoring Physical Access | Automated Intrusion Recognition and Responses",
        "controlText": "Recognize [Assignment: organization-defined classes or types of intrusions] and initiate [Assignment: organization-defined response actions] using [Assignment: organization-defined automated mechanisms].",
        "discussion": "Response actions can include notifying selected organizational personnel or law enforcement personnel. Automated mechanisms implemented to initiate response actions include system alert notifications, email and text messages, and activating door locking mechanisms. Physical access monitoring can be coordinated with intrusion detection systems and system monitoring capabilities to provide integrated threat coverage for the organization.",
        "relatedControls": "SI-4."
    },
    {
        "controlIdentifier": "PE-6(4)",
        "controlName": "Monitoring Physical Access | Monitoring Physical Access to Systems",
        "controlText": "Monitor physical access to the system in addition to the physical access monitoring of the facility at [Assignment: organization-defined physical spaces containing one or more components of the system].",
        "discussion": "Monitoring physical access to systems provides additional monitoring for those areas within facilities where there is a concentration of system components, including server rooms, media storage areas, and communications centers. Physical access monitoring can be coordinated with intrusion detection systems and system monitoring capabilities to provide comprehensive and integrated threat coverage for the organization.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "PE-3(6)",
        "controlName": "Physical Access Control | Facility Penetration Testing",
        "controlText": "[Withdrawn: Incorporated into CA-8.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "PE-8(1)",
        "controlName": "Visitor Access Records | Automated Records Maintenance and Review",
        "controlText": "Maintain and review visitor access records using [Assignment: organization-defined automated mechanisms].",
        "discussion": "Visitor access records may be stored and maintained in a database management system that is accessible by organizational personnel. Automated access to such records facilitates record reviews on a regular basis to determine if access authorizations are current and still required to support organizational mission and business functions.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "PE-5(1)",
        "controlName": "Access Control for Output Devices | Access to Output by Authorized Individuals",
        "controlText": "[Withdrawn: Incorporated into PE-5.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "PE-8(3)",
        "controlName": "Visitor Access Records | Limit Personally Identifiable Information Elements",
        "controlText": "Limit personally identifiable information contained in visitor access records to the following elements identified in the privacy risk assessment: [Assignment: organization-defined elements].",
        "discussion": "Organizations may have requirements that specify the contents of visitor access records. Limiting personally identifiable information in visitor access records when such information is not needed for operational purposes helps reduce the level of privacy risk created by a system.",
        "relatedControls": "RA-3, SA-8."
    },
    {
        "controlIdentifier": "PE-9",
        "controlName": "Power Equipment and Cabling",
        "controlText": "Protect power equipment and power cabling for the system from damage and destruction.",
        "discussion": "Organizations determine the types of protection necessary for the power equipment and cabling employed at different locations that are both internal and external to organizational facilities and environments of operation. Types of power equipment and cabling include internal cabling and uninterruptable power sources in offices or data centers, generators and power cabling outside of buildings, and power sources for self-contained components such as satellites, vehicles, and other deployable systems.",
        "relatedControls": "PE-4."
    },
    {
        "controlIdentifier": "PE-9(1)",
        "controlName": "Power Equipment and Cabling | Redundant Cabling",
        "controlText": "Employ redundant power cabling paths that are physically separated by [Assignment: organization-defined distance].",
        "discussion": "Physically separate and redundant power cables ensure that power continues to flow in the event that one of the cables is cut or otherwise damaged.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "PE-9(2)",
        "controlName": "Power Equipment and Cabling | Automatic Voltage Controls",
        "controlText": "Employ automatic voltage controls for [Assignment: organization-defined critical system components].",
        "discussion": "Automatic voltage controls can monitor and control voltage. Such controls include voltage regulators, voltage conditioners, and voltage stabilizers.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "PM-2",
        "controlName": "Information Security Program Leadership Role",
        "controlText": "Appoint a senior agency information security officer with the mission and resources to coordinate, develop, implement, and maintain an organization-wide information security program.",
        "discussion": "The senior agency information security officer is an organizational official. For federal agencies (as defined by applicable laws, executive orders, regulations, directives, policies, and standards), this official is the senior agency information security officer. Organizations may also refer to this official as the senior information security officer or chief information security officer.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SA-9(8)",
        "controlName": "External System Services | Processing and Storage Location — U.S. Jurisdiction",
        "controlText": "Restrict the geographic location of information processing and data storage to facilities located within in the legal jurisdictional boundary of the United States.",
        "discussion": "The geographic location of information processing and data storage can have a direct impact on the ability of organizations to successfully execute their mission and business functions. A compromise or breach of high impact information and systems can have severe or catastrophic adverse impacts on organizational assets and operations, individuals, other organizations, and the Nation. Restricting the processing and storage of high-impact information to facilities within the legal jurisdictional boundary of the United States provides greater control over such processing and storage.",
        "relatedControls": "SA-5, SR-4."
    },
    {
        "controlIdentifier": "SA-10(1)",
        "controlName": "Developer Configuration Management | Software and Firmware Integrity Verification",
        "controlText": "Require the developer of the system, system component, or system service to enable integrity verification of software and firmware components.",
        "discussion": "Software and firmware integrity verification allows organizations to detect unauthorized changes to software and firmware components using developer-provided tools, techniques, and mechanisms. The integrity checking mechanisms can also address counterfeiting of software and firmware components. Organizations verify the integrity of software and firmware components, for example, through secure one-way hashes provided by developers. Delivered software and firmware components also include any updates to such components.",
        "relatedControls": "SI-7, SR-11."
    },
    {
        "controlIdentifier": "SA-10(2)",
        "controlName": "Developer Configuration Management | Alternative Configuration Management Processes",
        "controlText": "Provide an alternate configuration management process using organizational personnel in the absence of a dedicated developer configuration management team.",
        "discussion": "Alternate configuration management processes may be required when organizations use commercial off-the-shelf information technology products. Alternate configuration management processes include organizational personnel who review and approve proposed changes to systems, system components, and system services and conduct security and privacy impact analyses prior to the implementation of changes to systems, components, or services.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SA-10(3)",
        "controlName": "Developer Configuration Management | Hardware Integrity Verification",
        "controlText": "Require the developer of the system, system component, or system service to enable integrity verification of hardware components.",
        "discussion": "Hardware integrity verification allows organizations to detect unauthorized changes to hardware components using developer-provided tools, techniques, methods, and mechanisms. Organizations may verify the integrity of hardware components with hard-to-copy labels, verifiable serial numbers provided by developers, and by requiring the use of anti-tamper technologies. Delivered hardware components also include hardware and firmware updates to such components.",
        "relatedControls": "SI-7."
    },
    {
        "controlIdentifier": "SA-10(4)",
        "controlName": "Developer Configuration Management | Trusted Generation",
        "controlText": "Require the developer of the system, system component, or system service to employ tools for comparing newly generated versions of security-relevant hardware descriptions, source code, and object code with previous versions.",
        "discussion": "The trusted generation of descriptions, source code, and object code addresses authorized changes to hardware, software, and firmware components between versions during development. The focus is on the efficacy of the configuration management process by the developer to ensure that newly generated versions of security-relevant hardware descriptions, source code, and object code continue to enforce the security policy for the system, system component, or system service. In contrast, SA-10(1) and SA-10(3) allow organizations to detect unauthorized changes to hardware, software, and firmware components using tools, techniques, or mechanisms provided by developers.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SA-10(5)",
        "controlName": "Developer Configuration Management | Mapping Integrity for Version Control",
        "controlText": "Require the developer of the system, system component, or system service to maintain the integrity of the mapping between the master build data describing the current version of security-relevant hardware, software, and firmware and the on-site master copy of the data for the current version.",
        "discussion": "Mapping integrity for version control addresses changes to hardware, software, and firmware components during both initial development and system development life cycle updates. Maintaining the integrity between the master copies of security-relevant hardware, software, and firmware (including designs, hardware drawings, source code) and the equivalent data in master copies in operational environments is essential to ensuring the availability of organizational systems that support critical mission and business functions.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SA-10(6)",
        "controlName": "Developer Configuration Management | Trusted Distribution",
        "controlText": "Require the developer of the system, system component, or system service to execute procedures for ensuring that security-relevant hardware, software, and firmware updates distributed to the organization are exactly as specified by the master copies.",
        "discussion": "The trusted distribution of security-relevant hardware, software, and firmware updates help to ensure that the updates are correct representations of the master copies maintained by the developer and have not been tampered with during distribution.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SA-10(7)",
        "controlName": "Developer Configuration Management | Security and Privacy Representatives",
        "controlText": "Require [Assignment: organization-defined security and privacy representatives] to be included in the [Assignment: organization-defined configuration change management and control process].",
        "discussion": "Information security and privacy representatives can include system security officers, senior agency information security officers, senior agency officials for privacy, and system privacy officers. Representation by personnel with information security and privacy expertise is important because changes to system configurations can have unintended side effects, some of which may be security- or privacy-relevant. Detecting such changes early in the process can help avoid unintended, negative consequences that could ultimately affect the security and privacy posture of systems. The configuration change management and control process in this control enhancement refers to the change management and control process defined by organizations in SA-10b.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SA-11(9)",
        "controlName": "Developer Testing and Evaluation | Interactive Application Security Testing",
        "controlText": "Require the developer of the system, system component, or system service to employ interactive application security testing tools to identify flaws and document the results.",
        "discussion": "Interactive (also known as instrumentation-based) application security testing is a method of detecting vulnerabilities by observing applications as they run during testing. The use of instrumentation relies on direct measurements of the actual running applications and uses access to the code, user interaction, libraries, frameworks, backend connections, and configurations to directly measure control effectiveness. When combined with analysis techniques, interactive application security testing can identify a broad range of potential vulnerabilities and confirm control effectiveness. Instrumentation-based testing works in real time and can be used continuously throughout the system development life cycle.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SA-12(2)",
        "controlName": "Supply Chain Protection | Supplier Reviews",
        "controlText": "[Withdrawn: Moved to SR-6.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SA-12(3)",
        "controlName": "Supply Chain Protection | Trusted Shipping and Warehousing",
        "controlText": "[Withdrawn: Incorporated into SR-3.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SA-12(4)",
        "controlName": "Supply Chain Protection | Diversity of Suppliers",
        "controlText": "[Withdrawn: Moved to SR-3(1).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SA-12(5)",
        "controlName": "Supply Chain Protection | Limitation of Harm",
        "controlText": "[Withdrawn: Moved to SR-3(2).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SA-12(6)",
        "controlName": "Supply Chain Protection | Minimizing Procurement Time",
        "controlText": "[Withdrawn: Incorporated into SR-5(1).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SA-12(7)",
        "controlName": "Supply Chain Protection | Assessments Prior to Selection / Acceptance / Update",
        "controlText": "[Withdrawn: Moved to SR-5(2).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SA-12(8)",
        "controlName": "Supply Chain Protection | Use of All-source Intelligence",
        "controlText": "[Withdrawn: Incorporated into RA-3(2).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SA-12(9)",
        "controlName": "Supply Chain Protection | Operations Security",
        "controlText": "[Withdrawn: Moved to SR-7.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SA-13",
        "controlName": "Trustworthiness",
        "controlText": "[Withdrawn: Incorporated into SA-8.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SA-14",
        "controlName": "Criticality Analysis",
        "controlText": "[Withdrawn: Incorporated into RA-9.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SA-14(1)",
        "controlName": "Criticality Analysis | Critical Components with No Viable Alternative Sourcing",
        "controlText": "[Withdrawn: Incorporated into SA-20.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SA-15(4)",
        "controlName": "Development Process, Standards, and Tools | Threat Modeling and Vulnerability Analysis",
        "controlText": "[Withdrawn: Incorporated into SA-11(2).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SA-15(9)",
        "controlName": "Development Process, Standards, and Tools | Use of Live Data",
        "controlText": "[Withdrawn: Incorporated into SA-3(2).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SA-18",
        "controlName": "Tamper Resistance and Detection",
        "controlText": "[Withdrawn: Moved to SR-9.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SA-18(1)",
        "controlName": "Tamper Resistance and Detection | Multiple Phases of System Development Life Cycle",
        "controlText": "[Withdrawn: Moved to SR-9(1).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SA-18(2)",
        "controlName": "Tamper Resistance and Detection | Inspection of Systems or Components",
        "controlText": "[Withdrawn: Moved to SR-10.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SA-19",
        "controlName": "Component Authenticity",
        "controlText": "[Withdrawn: Moved to SR-11.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SA-19(1)",
        "controlName": "Component Authenticity | Anti-counterfeit Training",
        "controlText": "[Withdrawn: Moved to SR-11(1).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SA-19(2)",
        "controlName": "Component Authenticity | Configuration Control for Component Service and Repair",
        "controlText": "[Withdrawn: Moved to SR-11(2).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SA-17(8)",
        "controlName": "Developer Security and Privacy Architecture and Design | Orchestration",
        "controlText": "Design [Assignment: organization-defined critical systems or system components] with coordinated behavior to implement the following capabilities: [Assignment: organization-defined capabilities, by system or component].",
        "discussion": "Security resources that are distributed, located at different layers or in different system elements, or are implemented to support different aspects of trustworthiness can interact in unforeseen or incorrect ways. Adverse consequences can include cascading failures, interference, or coverage gaps. Coordination of the behavior of security resources (e.g., by ensuring that one patch is installed across all resources before making a configuration change that assumes that the patch is propagated) can avert such negative interactions.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SA-17(9)",
        "controlName": "Developer Security and Privacy Architecture and Design | Design Diversity",
        "controlText": "Use different designs for [Assignment: organization-defined critical systems or system components] to satisfy a common set of requirements or to provide equivalent functionality.",
        "discussion": "Design diversity is achieved by supplying the same requirements specification to multiple developers, each of whom is responsible for developing a variant of the system or system component that meets the requirements. Variants can be in software design, in hardware design, or in both hardware and a software design. Differences in the designs of the variants can result from developer experience (e.g., prior use of a design pattern), design style (e.g., when decomposing a required function into smaller tasks, determining what constitutes a separate task and how far to decompose tasks into sub-tasks), selection of libraries to incorporate into the variant, and the development environment (e.g., different design tools make some design patterns easier to visualize). Hardware design diversity includes making different decisions about what information to keep in analog form and what information to convert to digital form, transmitting the same information at different times, and introducing delays in sampling (temporal diversity). Design diversity is commonly used to support fault tolerance.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SA-21(1)",
        "controlName": "Developer Screening | Validation of Screening",
        "controlText": "[Withdrawn: Incorporated into SA-21.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SA-22(1)",
        "controlName": "Unsupported System Components | Alternative Sources for Continued Support",
        "controlText": "[Withdrawn: Incorporated into SA-22.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SA-4(4)",
        "controlName": "Acquisition Process | Assignment of Components to Systems",
        "controlText": "[Withdrawn: Incorporated into CM-8(9).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SA-5(1)",
        "controlName": "System Documentation | Functional Properties of Security Controls",
        "controlText": "[Withdrawn: Incorporated into SA-4(1).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SA-5(2)",
        "controlName": "System Documentation | Security-relevant External System Interfaces",
        "controlText": "[Withdrawn: Incorporated into SA-4(2).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SA-5(3)",
        "controlName": "System Documentation | High-level Design",
        "controlText": "[Withdrawn: Incorporated into SA-4(2).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SA-5(4)",
        "controlName": "System Documentation | Low-level Design",
        "controlText": "[Withdrawn: Incorporated into SA-4(2).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SA-5(5)",
        "controlName": "System Documentation | Source Code",
        "controlText": "[Withdrawn: Incorporated into SA-4(2).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SA-20",
        "controlName": "Customized Development of Critical Components",
        "controlText": "Reimplement or custom develop the following critical system components: [Assignment: organization-defined critical system components].",
        "discussion": "Organizations determine that certain system components likely cannot be trusted due to specific threats to and vulnerabilities in those components for which there are no viable security controls to adequately mitigate risk. Reimplementation or custom development of such components may satisfy requirements for higher assurance and is carried out by initiating changes to system components (including hardware, software, and firmware) such that the standard attacks by adversaries are less likely to succeed. In situations where no alternative sourcing is available and organizations choose not to reimplement or custom develop critical system components, additional controls can be employed. Controls include enhanced auditing, restrictions on source code and system utility access, and protection from deletion of system and application files.",
        "relatedControls": "CP-2, RA-9, SA-8."
    },
    {
        "controlIdentifier": "SA-6",
        "controlName": "Software Usage Restrictions",
        "controlText": "[Withdrawn: Incorporated into CM-10 and SI-7.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SA-7",
        "controlName": "User-installed Software",
        "controlText": "[Withdrawn: Incorporated into CM-11 and SI-7.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SA-23",
        "controlName": "Specialization",
        "controlText": "Employ [Selection (one or more): design; modification; augmentation; reconfiguration] on [Assignment: organization-defined systems or system components] supporting mission essential services or functions to increase the trustworthiness in those systems or components.",
        "discussion": "It is often necessary for a system or system component that supports mission-essential services or functions to be enhanced to maximize the trustworthiness of the resource. Sometimes this enhancement is done at the design level. In other instances, it is done post-design, either through modifications of the system in question or by augmenting the system with additional components. For example, supplemental authentication or non-repudiation functions may be added to the system to enhance the identity of critical resources to other resources that depend on the organization-defined resources.",
        "relatedControls": "RA-9, SA-8."
    },
    {
        "controlIdentifier": "SC-7(16)",
        "controlName": "Boundary Protection | Prevent Discovery of System Components",
        "controlText": "Prevent the discovery of specific system components that represent a managed interface.",
        "discussion": "Preventing the discovery of system components representing a managed interface helps protect network addresses of those components from discovery through common tools and techniques used to identify devices on networks. Network addresses are not available for discovery and require prior knowledge for access. Preventing the discovery of components and devices can be accomplished by not publishing network addresses, using network address translation, or not entering the addresses in domain name systems. Another prevention technique is to periodically change network addresses.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SC-7(17)",
        "controlName": "Boundary Protection | Automated Enforcement of Protocol Formats",
        "controlText": "Enforce adherence to protocol formats.",
        "discussion": "System components that enforce protocol formats include deep packet inspection firewalls and XML gateways. The components verify adherence to protocol formats and specifications at the application layer and identify vulnerabilities that cannot be detected by devices operating at the network or transport layers.",
        "relatedControls": "SC-4."
    },
    {
        "controlIdentifier": "SC-7(18)",
        "controlName": "Boundary Protection | Fail Secure",
        "controlText": "Prevent systems from entering unsecure states in the event of an operational failure of a boundary protection device.",
        "discussion": "Fail secure is a condition achieved by employing mechanisms to ensure that in the event of operational failures of boundary protection devices at managed interfaces, systems do not enter into unsecure states where intended security properties no longer hold. Managed interfaces include routers, firewalls, and application gateways that reside on protected subnetworks (commonly referred to as demilitarized zones). Failures of boundary protection devices cannot lead to or cause information external to the devices to enter the devices nor can failures permit unauthorized information releases.",
        "relatedControls": "CP-2, CP-12, SC-24."
    },
    {
        "controlIdentifier": "SC-7(19)",
        "controlName": "Boundary Protection | Block Communication from Non-organizationally Configured Hosts",
        "controlText": "Block inbound and outbound communications traffic between [Assignment: organization-defined communication clients] that are independently configured by end users and external service providers.",
        "discussion": "Communication clients independently configured by end users and external service providers include instant messaging clients and video conferencing software and applications. Traffic blocking does not apply to communication clients that are configured by organizations to perform authorized functions.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SC-7(20)",
        "controlName": "Boundary Protection | Dynamic Isolation and Segregation",
        "controlText": "Provide the capability to dynamically isolate [Assignment: organization-defined system components] from other system components.",
        "discussion": "The capability to dynamically isolate certain internal system components is useful when it is necessary to partition or separate system components of questionable origin from components that possess greater trustworthiness. Component isolation reduces the attack surface of organizational systems. Isolating selected system components can also limit the damage from successful attacks when such attacks occur.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SC-7(21)",
        "controlName": "Boundary Protection | Isolation of System Components",
        "controlText": "Employ boundary protection mechanisms to isolate [Assignment: organization-defined system components] supporting [Assignment: organization-defined missions and/or business functions].",
        "discussion": "Organizations can isolate system components that perform different mission or business functions. Such isolation limits unauthorized information flows among system components and provides the opportunity to deploy greater levels of protection for selected system components. Isolating system components with boundary protection mechanisms provides the capability for increased protection of individual system components and to more effectively control information flows between those components. Isolating system components provides enhanced protection that limits the potential harm from hostile cyber-attacks and errors. The degree of isolation varies depending upon the mechanisms chosen. Boundary protection mechanisms include routers, gateways, and firewalls that separate system components into physically separate networks or subnetworks; cross-domain devices that separate subnetworks; virtualization techniques; and the encryption of information flows among system components using distinct encryption keys.",
        "relatedControls": "CA-9."
    },
    {
        "controlIdentifier": "SC-7(22)",
        "controlName": "Boundary Protection | Separate Subnets for Connecting to Different Security Domains",
        "controlText": "Implement separate network addresses to connect to systems in different security domains.",
        "discussion": "The decomposition of systems into subnetworks (i.e., subnets) helps to provide the appropriate level of protection for network connections to different security domains that contain information with different security categories or classification levels.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SC-7(23)",
        "controlName": "Boundary Protection | Disable Sender Feedback on Protocol Validation Failure",
        "controlText": "Disable feedback to senders on protocol format validation failure.",
        "discussion": "Disabling feedback to senders when there is a failure in protocol validation format prevents adversaries from obtaining information that would otherwise be unavailable.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SC-15(1)",
        "controlName": "Collaborative Computing Devices and Applications | Physical or Logical Disconnect",
        "controlText": "Provide [Selection (one or more): physical; logical] disconnect of collaborative computing devices in a manner that supports ease of use.",
        "discussion": "Failing to disconnect from collaborative computing devices can result in subsequent compromises of organizational information. Providing easy methods to disconnect from such devices after a collaborative computing session ensures that participants carry out the disconnect activity without having to go through complex and tedious procedures. Disconnect from collaborative computing devices can be manual or automatic.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SC-23(4)",
        "controlName": "Session Authenticity | Unique Session Identifiers with Randomization",
        "controlText": "[Withdrawn: Incorporated into SC-23(3).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SC-15(3)",
        "controlName": "Collaborative Computing Devices and Applications | Disabling and Removal in Secure Work Areas",
        "controlText": "Disable or remove collaborative computing devices and applications from [Assignment: organization-defined systems or system components] in [Assignment: organization-defined secure work areas].",
        "discussion": "Failing to disable or remove collaborative computing devices and applications from systems or system components can result in compromises of information, including eavesdropping on conversations. A Sensitive Compartmented Information Facility (SCIF) is an example of a secure work area.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SC-15(4)",
        "controlName": "Collaborative Computing Devices and Applications | Explicitly Indicate Current Participants",
        "controlText": "Provide an explicit indication of current participants in [Assignment: organization-defined online meetings and teleconferences].",
        "discussion": "Explicitly indicating current participants prevents unauthorized individuals from participating in collaborative computing sessions without the explicit knowledge of other participants.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SC-16",
        "controlName": "Transmission of Security and Privacy Attributes",
        "controlText": "Associate [Assignment: organization-defined security and privacy attributes] with information exchanged between systems and between system components.",
        "discussion": "Security and privacy attributes can be explicitly or implicitly associated with the information contained in organizational systems or system components. Attributes are abstractions that represent the basic properties or characteristics of an entity with respect to protecting information or the management of personally identifiable information. Attributes are typically associated with internal data structures, including records, buffers, and files within the system. Security and privacy attributes are used to implement access control and information flow control policies; reflect special dissemination, management, or distribution instructions, including permitted uses of personally identifiable information; or support other aspects of the information security and privacy policies. Privacy attributes may be used independently or in conjunction with security attributes.",
        "relatedControls": "AC-3, AC-4, AC-16."
    },
    {
        "controlIdentifier": "SC-16(1)",
        "controlName": "Transmission of Security and Privacy Attributes | Integrity Verification",
        "controlText": "Verify the integrity of transmitted security and privacy attributes.",
        "discussion": "Part of verifying the integrity of transmitted information is ensuring that security and privacy attributes that are associated with such information have not been modified in an unauthorized manner. Unauthorized modification of security or privacy attributes can result in a loss of integrity for transmitted information.",
        "relatedControls": "AU-10, SC-8."
    },
    {
        "controlIdentifier": "SC-16(2)",
        "controlName": "Transmission of Security and Privacy Attributes | Anti-spoofing Mechanisms",
        "controlText": "Implement anti-spoofing mechanisms to prevent adversaries from falsifying the security attributes indicating the successful application of the security process.",
        "discussion": "Some attack vectors operate by altering the security attributes of an information system to intentionally and maliciously implement an insufficient level of security within the system. The alteration of attributes leads organizations to believe that a greater number of security functions are in place and operational than have actually been implemented.",
        "relatedControls": "SI-3, SI-4, SI-7."
    },
    {
        "controlIdentifier": "SC-16(3)",
        "controlName": "Transmission of Security and Privacy Attributes | Cryptographic Binding",
        "controlText": "Implement [Assignment: organization-defined mechanisms or techniques] to bind security and privacy attributes to transmitted information.",
        "discussion": "Cryptographic mechanisms and techniques can provide strong security and privacy attribute binding to transmitted information to help ensure the integrity of such information.",
        "relatedControls": "AC-16, SC-12, SC-13."
    },
    {
        "controlIdentifier": "SC-18(3)",
        "controlName": "Mobile Code | Prevent Downloading and Execution",
        "controlText": "Prevent the download and execution of [Assignment: organization-defined unacceptable mobile code].",
        "discussion": "None.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SC-18(4)",
        "controlName": "Mobile Code | Prevent Automatic Execution",
        "controlText": "Prevent the automatic execution of mobile code in [Assignment: organization-defined software applications] and enforce [Assignment: organization-defined actions] prior to executing the code.",
        "discussion": "Actions enforced before executing mobile code include prompting users prior to opening email attachments or clicking on web links. Preventing the automatic execution of mobile code includes disabling auto-execute features on system components that employ portable storage devices, such as compact discs, digital versatile discs, and universal serial bus devices.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SC-18(5)",
        "controlName": "Mobile Code | Allow Execution Only in Confined Environments",
        "controlText": "Allow execution of permitted mobile code only in confined virtual machine environments.",
        "discussion": "Permitting the execution of mobile code only in confined virtual machine environments helps prevent the introduction of malicious code into other systems and system components.",
        "relatedControls": "SC-44, SI-7."
    },
    {
        "controlIdentifier": "SC-26(1)",
        "controlName": "Decoys | Detection of Malicious Code",
        "controlText": "[Withdrawn: Incorporated into SC-35.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SI-4(10)",
        "controlName": "System Monitoring | Visibility of Encrypted Communications",
        "controlText": "Make provisions so that [Assignment: organization-defined encrypted communications traffic] is visible to [Assignment: organization-defined system monitoring tools and mechanisms].",
        "discussion": "Organizations balance the need to encrypt communications traffic to protect data confidentiality with the need to maintain visibility into such traffic from a monitoring perspective. Organizations determine whether the visibility requirement applies to internal encrypted traffic, encrypted traffic intended for external destinations, or a subset of the traffic types.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SI-4(11)",
        "controlName": "System Monitoring | Analyze Communications Traffic Anomalies",
        "controlText": "Analyze outbound communications traffic at the external interfaces to the system and selected [Assignment: organization-defined interior points within the system] to discover anomalies.",
        "discussion": "Organization-defined interior points include subnetworks and subsystems. Anomalies within organizational systems include large file transfers, long-time persistent connections, attempts to access information from unexpected locations, the use of unusual protocols and ports, the use of unmonitored network protocols (e.g., IPv6 usage during IPv4 transition), and attempted communications with suspected malicious external addresses.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SI-4(12)",
        "controlName": "System Monitoring | Automated Organization-generated Alerts",
        "controlText": "Alert [Assignment: organization-defined personnel or roles] using [Assignment: organization-defined automated mechanisms] when the following indications of inappropriate or unusual activities with security or privacy implications occur: [Assignment: organization-defined activities that trigger alerts].",
        "discussion": "Organizational personnel on the system alert notification list include system administrators, mission or business owners, system owners, senior agency information security officer, senior agency official for privacy, system security officers, or privacy officers. Automated organization-generated alerts are the security alerts generated by organizations and transmitted using automated means. The sources for organization-generated alerts are focused on other entities such as suspicious activity reports and reports on potential insider threats. In contrast to alerts generated by the organization, alerts generated by the system in SI-4(5) focus on information sources that are internal to the systems, such as audit records.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SI-4(17)",
        "controlName": "System Monitoring | Integrated Situational Awareness",
        "controlText": "Correlate information from monitoring physical, cyber, and supply chain activities to achieve integrated, organization-wide situational awareness.",
        "discussion": "Correlating monitoring information from a more diverse set of information sources helps to achieve integrated situational awareness. Integrated situational awareness from a combination of physical, cyber, and supply chain monitoring activities enhances the capability of organizations to more quickly detect sophisticated attacks and investigate the methods and techniques employed to carry out such attacks. In contrast to SI-4(16), which correlates the various cyber monitoring information, integrated situational awareness is intended to correlate monitoring beyond the cyber domain. Correlation of monitoring information from multiple activities may help reveal attacks on organizations that are operating across multiple attack vectors.",
        "relatedControls": "AU-16, PE-6, SR-2, SR-4, SR-6."
    },
    {
        "controlIdentifier": "SI-4(18)",
        "controlName": "System Monitoring | Analyze Traffic and Covert Exfiltration",
        "controlText": "Analyze outbound communications traffic at external interfaces to the system and at the following interior points to detect covert exfiltration of information: [Assignment: organization-defined interior points within the system].",
        "discussion": "Organization-defined interior points include subnetworks and subsystems. Covert means that can be used to exfiltrate information include steganography.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SI-4(19)",
        "controlName": "System Monitoring | Risk for Individuals",
        "controlText": "Implement [Assignment: organization-defined additional monitoring] of individuals who have been identified by [Assignment: organization-defined sources] as posing an increased level of risk.",
        "discussion": "Indications of increased risk from individuals can be obtained from different sources, including personnel records, intelligence agencies, law enforcement organizations, and other sources. The monitoring of individuals is coordinated with the management, legal, security, privacy, and human resource officials who conduct such monitoring. Monitoring is conducted in accordance with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SI-4(20)",
        "controlName": "System Monitoring | Privileged Users",
        "controlText": "Implement the following additional monitoring of privileged users: [Assignment: organization-defined additional monitoring].",
        "discussion": "Privileged users have access to more sensitive information, including security-related information, than the general user population. Access to such information means that privileged users can potentially do greater damage to systems and organizations than non-privileged users. Therefore, implementing additional monitoring on privileged users helps to ensure that organizations can identify malicious activity at the earliest possible time and take appropriate actions.",
        "relatedControls": "AC-18."
    },
    {
        "controlIdentifier": "SI-4(21)",
        "controlName": "System Monitoring | Probationary Periods",
        "controlText": "Implement the following additional monitoring of individuals during [Assignment: organization-defined probationary period]: [Assignment: organization-defined additional monitoring].",
        "discussion": "During probationary periods, employees do not have permanent employment status within organizations. Without such status or access to information that is resident on the system, additional monitoring can help identify any potentially malicious activity or inappropriate behavior.",
        "relatedControls": "AC-18."
    },
    {
        "controlIdentifier": "SI-4(22)",
        "controlName": "System Monitoring | Unauthorized Network Services",
        "controlText": "\"(a) Detect network services that have not been authorized or approved by [Assignment: organization-defined authorization or approval processes]; and"
    },
    {
        "controlIdentifier": "(b) [Selection (one or more): Audit; Alert [Assignment: organization-defined personnel or roles]] when detected.\"",
        "controlName": "Unauthorized or unapproved network services include services in service-oriented architectures that lack organizational verification or validation and may therefore be unreliable or serve as malicious rogues for valid services.",
        "controlText": "CM-7."
    },
    {
        "controlIdentifier": "SI-4(23)",
        "controlName": "System Monitoring | Host-based Devices",
        "controlText": "Implement the following host-based monitoring mechanisms at [Assignment: organization-defined system components]: [Assignment: organization-defined host-based monitoring mechanisms].",
        "discussion": "Host-based monitoring collects information about the host (or system in which it resides). System components in which host-based monitoring can be implemented include servers, notebook computers, and mobile devices. Organizations may consider employing host-based monitoring mechanisms from multiple product developers or vendors.",
        "relatedControls": "AC-18, AC-19."
    },
    {
        "controlIdentifier": "SI-4(24)",
        "controlName": "System Monitoring | Indicators of Compromise",
        "controlText": "Discover, collect, and distribute to [Assignment: organization-defined personnel or roles], indicators of compromise provided by [Assignment: organization-defined sources].",
        "discussion": "Indicators of compromise (IOC) are forensic artifacts from intrusions that are identified on organizational systems at the host or network level. IOCs provide valuable information on systems that have been compromised. IOCs can include the creation of registry key values. IOCs for network traffic include Universal Resource Locator or protocol elements that indicate malicious code command and control servers. The rapid distribution and adoption of IOCs can improve information security by reducing the time that systems and organizations are vulnerable to the same exploit or attack. Threat indicators, signatures, tactics, techniques, procedures, and other indicators of compromise may be available via government and non-government cooperatives, including the Forum of Incident Response and Security Teams, the United States Computer Emergency Readiness Team, the Defense Industrial Base Cybersecurity Information Sharing Program, and the CERT Coordination Center.",
        "relatedControls": "AC-18."
    },
    {
        "controlIdentifier": "SI-4(25)",
        "controlName": "System Monitoring | Optimize Network Traffic Analysis",
        "controlText": "Provide visibility into network traffic at external and key internal system interfaces to optimize the effectiveness of monitoring devices.",
        "discussion": "Encrypted traffic, asymmetric routing architectures, capacity and latency limitations, and transitioning from older to newer technologies (e.g., IPv4 to IPv6 network protocol transition) may result in blind spots for organizations when analyzing network traffic. Collecting, decrypting, pre-processing, and distributing only relevant traffic to monitoring devices can streamline the efficiency and use of devices and optimize traffic analysis.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SI-4(8)",
        "controlName": "System Monitoring | Protection of Monitoring Information",
        "controlText": "[Withdrawn: Incorporated into SI-4.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SI-6(2)",
        "controlName": "Security and Privacy Function Verification | Automation Support for Distributed Testing",
        "controlText": "Implement automated mechanisms to support the management of distributed security and privacy function testing.",
        "discussion": "The use of automated mechanisms to support the management of distributed function testing helps to ensure the integrity, timeliness, completeness, and efficacy of such testing.",
        "relatedControls": "SI-2."
    },
    {
        "controlIdentifier": "SI-6(3)",
        "controlName": "Security and Privacy Function Verification | Report Verification Results",
        "controlText": "Report the results of security and privacy function verification to [Assignment: organization-defined personnel or roles].",
        "discussion": "Organizational personnel with potential interest in the results of the verification of security and privacy functions include systems security officers, senior agency information security officers, and senior agency officials for privacy.",
        "relatedControls": "SI-4, SR-4, SR-5."
    },
    {
        "controlIdentifier": "SI-7(1)",
        "controlName": "Software, Firmware, and Information Integrity | Integrity Checks",
        "controlText": "Perform an integrity check of [Assignment: organization-defined software, firmware, and information] [Selection (one or more): at startup; at [Assignment: organization-defined transitional states or security-relevant events]; [Assignment: organization-defined frequency]].",
        "discussion": "Security-relevant events include the identification of new threats to which organizational systems are susceptible and the installation of new hardware, software, or firmware. Transitional states include system startup, restart, shutdown, and abort.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SI-7(2)",
        "controlName": "Software, Firmware, and Information Integrity | Automated Notifications of Integrity Violations",
        "controlText": "Employ automated tools that provide notification to [Assignment: organization-defined personnel or roles] upon discovering discrepancies during integrity verification.",
        "discussion": "The employment of automated tools to report system and information integrity violations and to notify organizational personnel in a timely matter is essential to effective risk response. Personnel with an interest in system and information integrity violations include mission and business owners, system owners, senior agency information security official, senior agency official for privacy, system administrators, software developers, systems integrators, information security officers, and privacy officers.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SI-7(3)",
        "controlName": "Software, Firmware, and Information Integrity | Centrally Managed Integrity Tools",
        "controlText": "Employ centrally managed integrity verification tools.",
        "discussion": "Centrally managed integrity verification tools provides greater consistency in the application of such tools and can facilitate more comprehensive coverage of integrity verification actions.",
        "relatedControls": "AU-3, SI-2, SI-8."
    },
    {
        "controlIdentifier": "SI-6(1)",
        "controlName": "Security and Privacy Function Verification | Notification of Failed Security Tests",
        "controlText": "[Withdrawn: Incorporated into SI-6.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SI-7(5)",
        "controlName": "Software, Firmware, and Information Integrity | Automated Response to Integrity Violations",
        "controlText": "Automatically [Selection (one or more): shut the system down; restart the system; implement [Assignment: organization-defined controls]] when integrity violations are discovered.",
        "discussion": "Organizations may define different integrity-checking responses by type of information, specific information, or a combination of both. Types of information include firmware, software, and user data. Specific information includes boot firmware for certain types of machines. The automatic implementation of controls within organizational systems includes reversing the changes, halting the system, or triggering audit alerts when unauthorized modifications to critical security files occur.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SI-7(6)",
        "controlName": "Software, Firmware, and Information Integrity | Cryptographic Protection",
        "controlText": "Implement cryptographic mechanisms to detect unauthorized changes to software, firmware, and information.",
        "discussion": "Cryptographic mechanisms used to protect integrity include digital signatures and the computation and application of signed hashes using asymmetric cryptography, protecting the confidentiality of the key used to generate the hash, and using the public key to verify the hash information. Organizations that employ cryptographic mechanisms also consider cryptographic key management solutions.",
        "relatedControls": "SC-12, SC-13."
    },
    {
        "controlIdentifier": "SI-7(7)",
        "controlName": "Software, Firmware, and Information Integrity | Integration of Detection and Response",
        "controlText": "Incorporate the detection of the following unauthorized changes into the organizational incident response capability: [Assignment: organization-defined security-relevant changes to the system].",
        "discussion": "Integrating detection and response helps to ensure that detected events are tracked, monitored, corrected, and available for historical purposes. Maintaining historical records is important for being able to identify and discern adversary actions over an extended time period and for possible legal actions. Security-relevant changes include unauthorized changes to established configuration settings or the unauthorized elevation of system privileges.",
        "relatedControls": "AU-2, AU-6, IR-4, IR-5, SI-4."
    },
    {
        "controlIdentifier": "SI-7(8)",
        "controlName": "Software, Firmware, and Information Integrity | Auditing Capability for Significant Events",
        "controlText": "Upon detection of a potential integrity violation, provide the capability to audit the event and initiate the following actions: [Selection (one or more): generate an audit record; alert current user; alert [Assignment: organization-defined personnel or roles]; [Assignment: organization-defined other actions]].",
        "discussion": "Organizations select response actions based on types of software, specific software, or information for which there are potential integrity violations.",
        "relatedControls": "AU-2, AU-6, AU-12."
    },
    {
        "controlIdentifier": "SI-7(9)",
        "controlName": "Software, Firmware, and Information Integrity | Verify Boot Process",
        "controlText": "Verify the integrity of the boot process of the following system components: [Assignment: organization-defined system components].",
        "discussion": "Ensuring the integrity of boot processes is critical to starting system components in known, trustworthy states. Integrity verification mechanisms provide a level of assurance that only trusted code is executed during boot processes.",
        "relatedControls": "SI-6."
    },
    {
        "controlIdentifier": "SI-7(10)",
        "controlName": "Software, Firmware, and Information Integrity | Protection of Boot Firmware",
        "controlText": "Implement the following mechanisms to protect the integrity of boot firmware in [Assignment: organization-defined system components]: [Assignment: organization-defined mechanisms].",
        "discussion": "Unauthorized modifications to boot firmware may indicate a sophisticated, targeted attack. These types of targeted attacks can result in a permanent denial of service or a persistent malicious code presence. These situations can occur if the firmware is corrupted or if the malicious code is embedded within the firmware. System components can protect the integrity of boot firmware in organizational systems by verifying the integrity and authenticity of all updates to the firmware prior to applying changes to the system component and preventing unauthorized processes from modifying the boot firmware.",
        "relatedControls": "SI-6."
    },
    {
        "controlIdentifier": "SI-7(11)",
        "controlName": "Software, Firmware, and Information Integrity | Confined Environments with Limited Privileges",
        "controlText": "[Withdrawn: Moved to CM-7(6).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SI-7(12)",
        "controlName": "Software, Firmware, and Information Integrity | Integrity Verification",
        "controlText": "Require that the integrity of the following user-installed software be verified prior to execution: [Assignment: organization-defined user-installed software].",
        "discussion": "Organizations verify the integrity of user-installed software prior to execution to reduce the likelihood of executing malicious code or programs that contains errors from unauthorized modifications. Organizations consider the practicality of approaches to verifying software integrity, including the availability of trustworthy checksums from software developers and vendors.",
        "relatedControls": "CM-11."
    },
    {
        "controlIdentifier": "SI-7(13)",
        "controlName": "Software, Firmware, and Information Integrity | Code Execution in Protected Environments",
        "controlText": "[Withdrawn: Moved to CM-7(7).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SI-7(14)",
        "controlName": "Software, Firmware, and Information Integrity | Binary or Machine Executable Code",
        "controlText": "[Withdrawn: Moved to CM-7(8).]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SI-7(15)",
        "controlName": "Software, Firmware, and Information Integrity | Code Authentication",
        "controlText": "Implement cryptographic mechanisms to authenticate the following software or firmware components prior to installation: [Assignment: organization-defined software or firmware components].",
        "discussion": "Cryptographic authentication includes verifying that software or firmware components have been digitally signed using certificates recognized and approved by organizations. Code signing is an effective method to protect against malicious code. Organizations that employ cryptographic mechanisms also consider cryptographic key management solutions.",
        "relatedControls": "CM-5, SC-12, SC-13."
    },
    {
        "controlIdentifier": "SI-7(16)",
        "controlName": "Software, Firmware, and Information Integrity | Time Limit on Process Execution Without Supervision",
        "controlText": "Prohibit processes from executing without supervision for more than [Assignment: organization-defined time period].",
        "discussion": "Placing a time limit on process execution without supervision is intended to apply to processes for which typical or normal execution periods can be determined and situations in which organizations exceed such periods. Supervision includes timers on operating systems, automated responses, and manual oversight and response when system process anomalies occur.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SI-7(17)",
        "controlName": "Software, Firmware, and Information Integrity | Runtime Application Self-protection",
        "controlText": "Implement [Assignment: organization-defined controls] for application self-protection at runtime.",
        "discussion": "Runtime application self-protection employs runtime instrumentation to detect and block the exploitation of software vulnerabilities by taking advantage of information from the software in execution. Runtime exploit prevention differs from traditional perimeter-based protections such as guards and firewalls which can only detect and block attacks by using network information without contextual awareness. Runtime application self-protection technology can reduce the susceptibility of software to attacks by monitoring its inputs and blocking those inputs that could allow attacks. It can also help protect the runtime environment from unwanted changes and tampering. When a threat is detected, runtime application self-protection technology can prevent exploitation and take other actions (e.g., sending a warning message to the user, terminating the user's session, terminating the application, or sending an alert to organizational personnel). Runtime application self-protection solutions can be deployed in either a monitor or protection mode.",
        "relatedControls": "SI-16."
    },
    {
        "controlIdentifier": "SI-8",
        "controlName": "Spam Protection",
        "controlText": "\"a. Employ spam protection mechanisms at system entry and exit points to detect and act on unsolicited messages; and"
    },
    {
        "controlIdentifier": "b. Update spam protection mechanisms when new releases are available in accordance with organizational configuration management policy and procedures.\"",
        "controlName": "System entry and exit points include firewalls, remote-access servers, electronic mail servers, web servers, proxy servers, workstations, notebook computers, and mobile devices. Spam can be transported by different means, including email, email attachments, and web accesses. Spam protection mechanisms include signature definitions.",
        "controlText": "PL-9, SC-5, SC-7, SC-38, SI-3, SI-4."
    },
    {
        "controlIdentifier": "SI-7(4)",
        "controlName": "Software, Firmware, and Information Integrity | Tamper-evident Packaging",
        "controlText": "[Withdrawn: Incorporated into SR-9.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SI-8(2)",
        "controlName": "Spam Protection | Automatic Updates",
        "controlText": "Automatically update spam protection mechanisms [Assignment: organization-defined frequency].",
        "discussion": "Using automated mechanisms to update spam protection mechanisms helps to ensure that updates occur on a regular basis and provide the latest content and protection capabilities.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SI-8(3)",
        "controlName": "Spam Protection | Continuous Learning Capability",
        "controlText": "Implement spam protection mechanisms with a learning capability to more effectively identify legitimate communications traffic.",
        "discussion": "Learning mechanisms include Bayesian filters that respond to user inputs that identify specific traffic as spam or legitimate by updating algorithm parameters and thereby more accurately separating types of traffic.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SI-8(1)",
        "controlName": "Spam Protection | Central Management",
        "controlText": "[Withdrawn: Incorporated into PL-9.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SI-10",
        "controlName": "Information Input Validation",
        "controlText": "Check the validity of the following information inputs: [Assignment: organization-defined information inputs to the system].",
        "discussion": "Checking the valid syntax and semantics of system inputs—including character set, length, numerical range, and acceptable values—verifies that inputs match specified definitions for format and content. For example, if the organization specifies that numerical values between 1-100 are the only acceptable inputs for a field in a given application, inputs of 387, abc, or %K% are invalid inputs and are not accepted as input to the system. Valid inputs are likely to vary from field to field within a software application. Applications typically follow well-defined protocols that use structured messages (i.e., commands or queries) to communicate between software modules or system components. Structured messages can contain raw or unstructured data interspersed with metadata or control information. If software applications use attacker-supplied inputs to construct structured messages without properly encoding such messages, then the attacker could insert malicious commands or special characters that can cause the data to be interpreted as control information or metadata. Consequently, the module or component that receives the corrupted output will perform the wrong operations or otherwise interpret the data incorrectly. Prescreening inputs prior to passing them to interpreters prevents the content from being unintentionally interpreted as commands. Input validation ensures accurate and correct inputs and prevents attacks such as cross-site scripting and a variety of injection attacks.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SI-10(1)",
        "controlName": "Information Input Validation | Manual Override Capability",
        "controlText": "\"(a) Provide a manual override capability for input validation of the following information inputs: [Assignment: organization-defined inputs defined in the base control (SI-10)];"
    },
    {
        "controlIdentifier": "(b) Restrict the use of the manual override capability to only [Assignment: organization-defined authorized individuals]; and"
    },
    {
        "controlIdentifier": "SI-10(2)",
        "controlName": "Information Input Validation | Review and Resolve Errors",
        "controlText": "Review and resolve input validation errors within [Assignment: organization-defined time period].",
        "discussion": "Resolution of input validation errors includes correcting systemic causes of errors and resubmitting transactions with corrected input. Input validation errors are those related to the information inputs defined by the organization in the base control (SI-10).",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SI-10(3)",
        "controlName": "Information Input Validation | Predictable Behavior",
        "controlText": "Verify that the system behaves in a predictable and documented manner when invalid inputs are received.",
        "discussion": "A common vulnerability in organizational systems is unpredictable behavior when invalid inputs are received. Verification of system predictability helps ensure that the system behaves as expected when invalid inputs are received. This occurs by specifying system responses that allow the system to transition to known states without adverse, unintended side effects. The invalid inputs are those related to the information inputs defined by the organization in the base control (SI-10).",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SI-10(4)",
        "controlName": "Information Input Validation | Timing Interactions",
        "controlText": "Account for timing interactions among system components in determining appropriate responses for invalid inputs.",
        "discussion": "In addressing invalid system inputs received across protocol interfaces, timing interactions become relevant, where one protocol needs to consider the impact of the error response on other protocols in the protocol stack. For example, 802.11 standard wireless network protocols do not interact well with Transmission Control Protocols (TCP) when packets are dropped (which could be due to invalid packet input). TCP assumes packet losses are due to congestion, while packets lost over 802.11 links are typically dropped due to noise or collisions on the link. If TCP makes a congestion response, it takes the wrong action in response to a collision event. Adversaries may be able to use what appear to be acceptable individual behaviors of the protocols in concert to achieve adverse effects through suitable construction of invalid input. The invalid inputs are those related to the information inputs defined by the organization in the base control (SI-10).",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SI-10(5)",
        "controlName": "Information Input Validation | Restrict Inputs to Trusted Sources and Approved Formats",
        "controlText": "Restrict the use of information inputs to [Assignment: organization-defined trusted sources] and/or [Assignment: organization-defined formats].",
        "discussion": "Restricting the use of inputs to trusted sources and in trusted formats applies the concept of authorized or permitted software to information inputs. Specifying known trusted sources for information inputs and acceptable formats for such inputs can reduce the probability of malicious activity. The information inputs are those defined by the organization in the base control (SI-10).",
        "relatedControls": "AC-3, AC-6."
    },
    {
        "controlIdentifier": "SI-10(6)",
        "controlName": "Information Input Validation | Injection Prevention",
        "controlText": "Prevent untrusted data injections.",
        "discussion": "Untrusted data injections may be prevented using a parameterized interface or output escaping (output encoding). Parameterized interfaces separate data from code so that injections of malicious or unintended data cannot change the semantics of commands being sent. Output escaping uses specified characters to inform the interpreter’s parser whether data is trusted. Prevention of untrusted data injections are with respect to the information inputs defined by the organization in the base control (SI-10).",
        "relatedControls": "AC-3, AC-6."
    },
    {
        "controlIdentifier": "SI-12",
        "controlName": "Information Management and Retention",
        "controlText": "Manage and retain information within the system and information output from the system in accordance with applicable laws, executive orders, directives, regulations, policies, standards, guidelines and operational requirements.",
        "discussion": "Information management and retention requirements cover the full life cycle of information, in some cases extending beyond system disposal. Information to be retained may also include policies, procedures, plans, reports, data output from control implementation, and other types of administrative information. The National Archives and Records Administration (NARA) provides federal policy and guidance on records retention and schedules. If organizations have a records management office, consider coordinating with records management personnel. Records produced from the output of implemented controls that may require management and retention include, but are not limited to: All XX-1, AC-6(9), AT-4, AU-12, CA-2, CA-3, CA-5, CA-6, CA-7, CA-8, CA-9, CM-2, CM-3, CM-4, CM-6, CM-8, CM-9, CM-12, CM-13, CP-2, IR-6, IR-8, MA-2, MA-4, PE-2, PE-8, PE-16, PE-17, PL-2, PL-4, PL-7, PL-8, PM-5, PM-8, PM-9, PM-18, PM-21, PM-27, PM-28, PM-30, PM-31, PS-2, PS-6, PS-7, PT-2, PT-3, PT-7, RA-2, RA-3, RA-5, RA-8, SA-4, SA-5, SA-8, SA-10, SI-4, SR-2, SR-4, SR-8.",
        "relatedControls": "AC-16, AU-5, AU-11, CA-2, CA-3, CA-5, CA-6, CA-7, CA-9, CM-5, CM-9, CP-2, IR-8, MP-2, MP-3, MP-4, MP-6, PL-2, PL-4, PM-4, PM-8, PM-9, PS-2, PS-6, PT-2, PT-3, RA-2, RA-3, SA-5, SA-8, SR-2."
    },
    {
        "controlIdentifier": "SI-12(1)",
        "controlName": "Information Management and Retention | Limit Personally Identifiable Information Elements",
        "controlText": "Limit personally identifiable information being processed in the information life cycle to the following elements of personally identifiable information: [Assignment: organization-defined elements of personally identifiable information].",
        "discussion": "Limiting the use of personally identifiable information throughout the information life cycle when the information is not needed for operational purposes helps to reduce the level of privacy risk created by a system. The information life cycle includes information creation, collection, use, processing, storage, maintenance, dissemination, disclosure, and disposition. Risk assessments as well as applicable laws, regulations, and policies can provide useful inputs to determining which elements of personally identifiable information may create risk.",
        "relatedControls": "PM-25."
    },
    {
        "controlIdentifier": "SI-12(2)",
        "controlName": "Information Management and Retention | Minimize Personally Identifiable Information in Testing, Training, and Research",
        "controlText": "Use the following techniques to minimize the use of personally identifiable information for research, testing, or training: [Assignment: organization-defined techniques].",
        "discussion": "Organizations can minimize the risk to an individual’s privacy by employing techniques such as de-identification or synthetic data. Limiting the use of personally identifiable information throughout the information life cycle when the information is not needed for research, testing, or training helps reduce the level of privacy risk created by a system. Risk assessments as well as applicable laws, regulations, and policies can provide useful inputs to determining the techniques to use and when to use them.",
        "relatedControls": "PM-22, PM-25, SI-19."
    },
    {
        "controlIdentifier": "SI-12(3)",
        "controlName": "Information Management and Retention | Information Disposal",
        "controlText": "Use the following techniques to dispose of, destroy, or erase information following the retention period: [Assignment: organization-defined techniques].",
        "discussion": "Organizations can minimize both security and privacy risks by disposing of information when it is no longer needed. The disposal or destruction of information applies to originals as well as copies and archived records, including system logs that may contain personally identifiable information.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SI-13(1)",
        "controlName": "Predictable Failure Prevention | Transferring Component Responsibilities",
        "controlText": "Take system components out of service by transferring component responsibilities to substitute components no later than [Assignment: organization-defined fraction or percentage] of mean time to failure.",
        "discussion": "Transferring primary system component responsibilities to other substitute components prior to primary component failure is important to reduce the risk of degraded or debilitated mission or business functions. Making such transfers based on a percentage of mean time to failure allows organizations to be proactive based on their risk tolerance. However, the premature replacement of system components can result in the increased cost of system operations.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SI-9",
        "controlName": "Information Input Restrictions",
        "controlText": "[Withdrawn: Incorporated into AC-2, AC-3, AC-5, and AC-6.]",
        "discussion": "",
        "relatedControls": ""
    },
    {
        "controlIdentifier": "SI-13(3)",
        "controlName": "Predictable Failure Prevention | Manual Transfer Between Components",
        "controlText": "Manually initiate transfers between active and standby system components when the use of the active component reaches [Assignment: organization-defined percentage] of the mean time to failure.",
        "discussion": "For example, if the MTTF for a system component is 100 days and the MTTF percentage defined by the organization is 90 percent, the manual transfer would occur after 90 days.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SI-13(5)",
        "controlName": "Predictable Failure Prevention | Failover Capability",
        "controlText": "Provide [Selection: real-time; near real-time] [Assignment: organization-defined failover capability] for the system.",
        "discussion": "Failover refers to the automatic switchover to an alternate system upon the failure of the primary system. Failover capability includes incorporating mirrored system operations at alternate processing sites or periodic data mirroring at regular intervals defined by the recovery time periods of organizations.",
        "relatedControls": "CP-6, CP-7, CP-9."
    },
    {
        "controlIdentifier": "SI-14(1)",
        "controlName": "Non-persistence | Refresh from Trusted Sources",
        "controlText": "Obtain software and data employed during system component and service refreshes from the following trusted sources: [Assignment: organization-defined trusted sources].",
        "discussion": "Trusted sources include software and data from write-once, read-only media or from selected offline secure storage facilities.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SI-14(3)",
        "controlName": "Non-persistence | Non-persistent Connectivity",
        "controlText": "Establish connections to the system on demand and terminate connections after [Selection: completion of a request; a period of non-use].",
        "discussion": "Persistent connections to systems can provide advanced adversaries with paths to move laterally through systems and potentially position themselves closer to high value assets. Limiting the availability of such connections impedes the adversary’s ability to move freely through organizational systems.",
        "relatedControls": "SC-10."
    },
    {
        "controlIdentifier": "SI-15",
        "controlName": "Information Output Filtering",
        "controlText": "Validate information output from the following software programs and/or applications to ensure that the information is consistent with the expected content: [Assignment: organization-defined software programs and/or applications].",
        "discussion": "Certain types of attacks, including SQL injections, produce output results that are unexpected or inconsistent with the output results that would be expected from software programs or applications. Information output filtering focuses on detecting extraneous content, preventing such extraneous content from being displayed, and then alerting monitoring tools that anomalous behavior has been discovered.",
        "relatedControls": "SI-3, SI-4, SI-11."
    },
    {
        "controlIdentifier": "SI-16",
        "controlName": "Memory Protection",
        "controlText": "Implement the following controls to protect the system memory from unauthorized code execution: [Assignment: organization-defined controls].",
        "discussion": "Some adversaries launch attacks with the intent of executing code in non-executable regions of memory or in memory locations that are prohibited. Controls employed to protect memory include data execution prevention and address space layout randomization. Data execution prevention controls can either be hardware-enforced or software-enforced with hardware enforcement providing the greater strength of mechanism.",
        "relatedControls": "AC-25, SC-3, SI-7."
    },
    {
        "controlIdentifier": "SI-17",
        "controlName": "Fail-safe Procedures",
        "controlText": "Implement the indicated fail-safe procedures when the indicated failures occur: [Assignment: organization-defined list of failure conditions and associated fail-safe procedures].",
        "discussion": "Failure conditions include the loss of communications among critical system components or between system components and operational facilities. Fail-safe procedures include alerting operator personnel and providing specific instructions on subsequent steps to take. Subsequent steps may include doing nothing, reestablishing system settings, shutting down processes, restarting the system, or contacting designated organizational personnel.",
        "relatedControls": "CP-12, CP-13, SC-24, SI-13."
    },
    {
        "controlIdentifier": "SI-18(2)",
        "controlName": "Personally Identifiable Information Quality Operations | Data Tags",
        "controlText": "Employ data tags to automate the correction or deletion of personally identifiable information across the information life cycle within organizational systems.",
        "discussion": "Data tagging personally identifiable information includes tags that note processing permissions, authority to process, de-identification, impact level, information life cycle stage, and retention or last updated dates. Employing data tags for personally identifiable information can support the use of automation tools to correct or delete relevant personally identifiable information.",
        "relatedControls": "AC-3, AC-16, SC-16."
    },
    {
        "controlIdentifier": "SI-18(3)",
        "controlName": "Personally Identifiable Information Quality Operations | Collection",
        "controlText": "Collect personally identifiable information directly from the individual.",
        "discussion": "Individuals or their designated representatives can be sources of correct personally identifiable information. Organizations consider contextual factors that may incentivize individuals to provide correct data versus false data. Additional steps may be necessary to validate collected information based on the nature and context of the personally identifiable information, how it is to be used, and how it was obtained. The measures taken to validate the accuracy of personally identifiable information used to make determinations about the rights, benefits, or privileges of individuals under federal programs may be more comprehensive than the measures taken to validate less sensitive personally identifiable information.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SI-18(4)",
        "controlName": "Personally Identifiable Information Quality Operations | Individual Requests",
        "controlText": "Correct or delete personally identifiable information upon request by individuals or their designated representatives.",
        "discussion": "Inaccurate personally identifiable information maintained by organizations may cause problems for individuals, especially in those business functions where inaccurate information may result in inappropriate decisions or the denial of benefits and services to individuals. Even correct information, in certain circumstances, can cause problems for individuals that outweigh the benefits of an organization maintaining the information. Organizations use discretion when determining if personally identifiable information is to be corrected or deleted based on the scope of requests, the changes sought, the impact of the changes, and laws, regulations, and policies. Organizational personnel consult with the senior agency official for privacy and legal counsel regarding appropriate instances of correction or deletion.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SI-18(5)",
        "controlName": "Personally Identifiable Information Quality Operations | Notice of Correction or Deletion",
        "controlText": "Notify [Assignment: organization-defined recipients of personally identifiable information] and individuals that the personally identifiable information has been corrected or deleted.",
        "discussion": "When personally identifiable information is corrected or deleted, organizations take steps to ensure that all authorized recipients of such information, and the individual with whom the information is associated or their designated representatives, are informed of the corrected or deleted information.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SI-19(1)",
        "controlName": "De-identification | Collection",
        "controlText": "De-identify the dataset upon collection by not collecting personally identifiable information.",
        "discussion": "If a data source contains personally identifiable information but the information will not be used, the dataset can be de-identified when it is created by not collecting the data elements that contain the personally identifiable information. For example, if an organization does not intend to use the social security number of an applicant, then application forms do not ask for a social security number.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SI-19(2)",
        "controlName": "De-identification | Archiving",
        "controlText": "Prohibit archiving of personally identifiable information elements if those elements in a dataset will not be needed after the dataset is archived.",
        "discussion": "Datasets can be archived for many reasons. The envisioned purposes for the archived dataset are specified, and if personally identifiable information elements are not required, the elements are not archived. For example, social security numbers may have been collected for record linkage, but the archived dataset may include the required elements from the linked records. In this case, it is not necessary to archive the social security numbers.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SI-19(3)",
        "controlName": "De-identification | Release",
        "controlText": "Remove personally identifiable information elements from a dataset prior to its release if those elements in the dataset do not need to be part of the data release.",
        "discussion": "Prior to releasing a dataset, a data custodian considers the intended uses of the dataset and determines if it is necessary to release personally identifiable information. If the personally identifiable information is not necessary, the information can be removed using de-identification techniques.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SI-19(4)",
        "controlName": "De-identification | Removal, Masking, Encryption, Hashing, or Replacement of Direct Identifiers",
        "controlText": "Remove, mask, encrypt, hash, or replace direct identifiers in a dataset.",
        "discussion": "There are many possible processes for removing direct identifiers from a dataset. Columns in a dataset that contain a direct identifier can be removed. In masking, the direct identifier is transformed into a repeating character, such as XXXXXX or 999999.  Identifiers can be encrypted or hashed so that the linked records remain linked. In the case of encryption or hashing, algorithms are employed that require the use of a key, including the Advanced Encryption Standard or a Hash-based Message Authentication Code. Implementations may use the same key for all identifiers or use a different key for each identifier. Using a different key for each identifier provides a higher degree of security and privacy. Identifiers can alternatively be replaced with a keyword, including transforming George Washington to PATIENT or replacing it with a surrogate value, such as transforming George Washington to Abraham Polk.",
        "relatedControls": "SC-12, SC-13."
    },
    {
        "controlIdentifier": "SI-19(5)",
        "controlName": "De-identification | Statistical Disclosure Control",
        "controlText": "Manipulate numerical data, contingency tables, and statistical findings so that no individual or organization is identifiable in the results of the analysis.",
        "discussion": "Many types of statistical analyses can result in the disclosure of information about individuals even if only summary information is provided. For example, if a school that publishes a monthly table with the number of minority students enrolled, reports that it has 10-19 such students in January, and subsequently reports that it has 20-29 such students in March, then it can be inferred that the student who enrolled in February was a minority.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SI-19(6)",
        "controlName": "De-identification | Differential Privacy",
        "controlText": "Prevent disclosure of personally identifiable information by adding non-deterministic noise to the results of mathematical operations before the results are reported.",
        "discussion": "The mathematical definition for differential privacy holds that the result of a dataset analysis should be approximately the same before and after the addition or removal of a single data record (which is assumed to be the data from a single individual). In its most basic form, differential privacy applies only to online query systems. However, it can also be used to produce machine-learning statistical classifiers and synthetic data. Differential privacy comes at the cost of decreased accuracy of results, forcing organizations to quantify the trade-off between privacy protection and the overall accuracy, usefulness, and utility of the de-identified dataset. Non-deterministic noise can include adding small, random values to the results of mathematical operations in dataset analysis.",
        "relatedControls": "SC-12, SC-13."
    },
    {
        "controlIdentifier": "SI-19(7)",
        "controlName": "De-identification | Validated Algorithms and Software",
        "controlText": "Perform de-identification using validated algorithms and software that is validated to implement the algorithms.",
        "discussion": "Algorithms that appear to remove personally identifiable information from a dataset may in fact leave information that is personally identifiable or data that is re-identifiable. Software that is claimed to implement a validated algorithm may contain bugs or implement a different algorithm. Software may de-identify one type of data, such as integers, but not de-identify another type of data, such as floating point numbers. For these reasons, de-identification is performed using algorithms and software that are validated.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SI-19(8)",
        "controlName": "De-identification | Motivated Intruder",
        "controlText": "Perform a motivated intruder test on the de-identified dataset to determine if the identified data remains or if the de-identified data can be re-identified.",
        "discussion": "A motivated intruder test is a test in which an individual or group takes a data release and specified resources and attempts to re-identify one or more individuals in the de-identified dataset. Such tests specify the amount of inside knowledge, computational resources, financial resources, data, and skills that intruders possess to conduct the tests. A motivated intruder test can determine if the de-identification is insufficient. It can also be a useful diagnostic tool to assess if de-identification is likely to be sufficient. However, the test alone cannot prove that de-identification is sufficient.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SI-20",
        "controlName": "Tainting",
        "controlText": "Embed data or capabilities in the following systems or system components to determine if organizational data has been exfiltrated or improperly removed from the organization: [Assignment: organization-defined systems or system components].",
        "discussion": "Many cyber-attacks target organizational information, or information that the organization holds on behalf of other entities (e.g., personally identifiable information), and exfiltrate that data. In addition, insider attacks and erroneous user procedures can remove information from the system that is in violation of the organizational policies. Tainting approaches can range from passive to active. A passive tainting approach can be as simple as adding false email names and addresses to an internal database. If the organization receives email at one of the false email addresses, it knows that the database has been compromised. Moreover, the organization knows that the email was sent by an unauthorized entity, so any packets it includes potentially contain malicious code, and that the unauthorized entity may have potentially obtained a copy of the database. Another tainting approach can include embedding false data or steganographic data in files to enable the data to be found via open-source analysis. Finally, an active tainting approach can include embedding software in the data that is able to call home, thereby alerting the organization to its capture, and possibly its location, and the path by which it was exfiltrated or removed.",
        "relatedControls": "AU-13."
    },
    {
        "controlIdentifier": "SI-21",
        "controlName": "Information Refresh",
        "controlText": "Refresh [Assignment: organization-defined information] at [Assignment: organization-defined frequencies] or generate the information on demand and delete the information when no longer needed.",
        "discussion": "Retaining information for longer than it is needed makes it an increasingly valuable and enticing target for adversaries. Keeping information available for the minimum period of time needed to support organizational missions or business functions reduces the opportunity for adversaries to compromise, capture, and exfiltrate that information.",
        "relatedControls": "SI-14."
    },
    {
        "controlIdentifier": "SR-2(1)",
        "controlName": "Supply Chain Risk Management Plan | Establish SCRM Team",
        "controlText": "Establish a supply chain risk management team consisting of [Assignment: organization-defined personnel, roles, and responsibilities] to lead and support the following SCRM activities: [Assignment: organization-defined supply chain risk management activities].",
        "discussion": "To implement supply chain risk management plans, organizations establish a coordinated, team-based approach to identify and assess supply chain risks and manage these risks by using programmatic and technical mitigation techniques. The team approach enables organizations to conduct an analysis of their supply chain, communicate with internal and external partners or stakeholders, and gain broad consensus regarding the appropriate resources for SCRM. The SCRM team consists of organizational personnel with diverse roles and responsibilities for leading and supporting SCRM activities, including risk executive, information technology, contracting, information security, privacy, mission or business, legal, supply chain and logistics, acquisition, business continuity, and other relevant functions. Members of the SCRM team are involved in various aspects of the SDLC and, collectively, have an awareness of and provide expertise in acquisition processes, legal practices, vulnerabilities, threats, and attack vectors, as well as an understanding of the technical aspects and dependencies of systems. The SCRM team can be an extension of the security and privacy risk management processes or be included as part of an organizational risk management team.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SR-3",
        "controlName": "Supply Chain Controls and Processes",
        "controlText": "\"a. Establish a process or processes to identify and address weaknesses or deficiencies in the supply chain elements and processes of [Assignment: organization-defined system or system component] in coordination with [Assignment: organization-defined supply chain personnel];"
    },
    {
        "controlIdentifier": "SR-3(1)",
        "controlName": "Supply Chain Controls and Processes | Diverse Supply Base",
        "controlText": "Employ a diverse set of sources for the following system components and services:  [Assignment: organization-defined system components and services].",
        "discussion": "Diversifying the supply of systems, system components, and services can reduce the probability that adversaries will successfully identify and target the supply chain and can reduce the impact of a supply chain event or compromise. Identifying multiple suppliers for replacement components can reduce the probability that the replacement component will become unavailable. Employing a diverse set of developers or logistics service providers can reduce the impact of a natural disaster or other supply chain event. Organizations consider designing the system to include diverse materials and components.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SR-3(2)",
        "controlName": "Supply Chain Controls and Processes | Limitation of Harm",
        "controlText": "Employ the following controls to limit harm from potential adversaries identifying and targeting the organizational supply chain: [Assignment: organization-defined controls].",
        "discussion": "Controls that can be implemented to reduce the probability of adversaries successfully identifying and targeting the supply chain include avoiding the purchase of custom or non-standardized configurations, employing approved vendor lists with standing reputations in industry, following pre-agreed maintenance schedules and update and patch delivery mechanisms, maintaining a contingency plan in case of a supply chain event, using procurement carve-outs that provide exclusions to commitments or obligations, using diverse delivery routes, and minimizing the time between purchase decisions and delivery.",
        "relatedControls": "None."
    },
    {
        "controlIdentifier": "SR-3(3)",
        "controlName": "Supply Chain Controls and Processes | Sub-tier Flow Down",
        "controlText": "Ensure that the controls included in the contracts of prime contractors are also included in the contracts of subcontractors.",
        "discussion": "To manage supply chain risk effectively and holistically, it is important that organizations ensure that supply chain risk management controls are included at all tiers in the supply chain. This includes ensuring that Tier 1 (prime) contractors have implemented processes to facilitate the flow down of supply chain risk management controls to sub-tier contractors. The controls subject to flow down are identified in SR-3b.",
        "relatedControls": "SR-5, SR-8."
    },
    {
        "controlIdentifier": "SR-4",
        "controlName": "Provenance",
        "controlText": "Document, monitor, and maintain valid provenance of the following systems, system components, and associated data: [Assignment: organization-defined systems, system components, and associated data].",
        "discussion": "Every system and system component has a point of origin and may be changed throughout its existence. Provenance is the chronology of the origin, development, ownership, location, and changes to a system or system component and associated data. It may also include personnel and processes used to interact with or make modifications to the system, component, or associated data. Organizations consider developing procedures (see SR-1) for allocating responsibilities for the creation, maintenance, and monitoring of provenance for systems and system components; transferring provenance documentation and responsibility between organizations; and preventing and monitoring for unauthorized changes to the provenance records. Organizations have methods to document, monitor, and maintain valid provenance baselines for systems, system components, and related data. These actions help track, assess, and document any changes to the provenance, including changes in supply chain elements or configuration, and help ensure non-repudiation of provenance information and the provenance change records. Provenance considerations are addressed throughout the system development life cycle and incorporated into contracts and other arrangements, as appropriate.",
        "relatedControls": "CM-8, MA-2, MA-6, RA-9, SA-3, SA-8, SI-4."
    },
    {
        "controlIdentifier": "SR-4(1)",
        "controlName": "Provenance | Identity",
        "controlText": "Establish and maintain unique identification of the following supply chain elements, processes, and personnel associated with the identified system and critical system components: [Assignment: organization-defined supply chain elements, processes, and personnel associated with organization-defined systems and critical system components].",
        "discussion": "Knowing who and what is in the supply chains of organizations is critical to gaining visibility into supply chain activities. Visibility into supply chain activities is also important for monitoring and identifying high-risk events and activities. Without reasonable visibility into supply chains elements, processes, and personnel, it is very difficult for organizations to understand and manage risk and reduce their susceptibility to adverse events. Supply chain elements include organizations, entities, or tools used for the research and development, design, manufacturing, acquisition, delivery, integration, operations, maintenance, and disposal of systems and system components. Supply chain processes include development processes for hardware, software, and firmware; shipping and handling procedures; configuration management tools, techniques, and measures to maintain provenance; personnel and physical security programs; or other programs, processes, or procedures associated with the production and distribution of supply chain elements. Supply chain personnel are individuals with specific roles and responsibilities related to the secure the research and development, design, manufacturing, acquisition, delivery, integration, operations and maintenance, and disposal of a system or system component. Identification methods are sufficient to support an investigation in case of a supply chain change (e.g. if a supply company is purchased), compromise, or event.",
        "relatedControls": "IA-2, IA-8, PE-16."
    },
    {
        "controlIdentifier": "SR-4(2)",
        "controlName": "Provenance | Track and Trace",
        "controlText": "Establish and maintain unique identification of the following systems and critical system components for tracking through the supply chain: [Assignment: organization-defined systems and critical system components].",
        "discussion": "Tracking the unique identification of systems and system components during development and transport activities provides a foundational identity structure for the establishment and maintenance of provenance. For example, system components may be labeled using serial numbers or tagged using radio-frequency identification tags. Labels and tags can help provide better visibility into the provenance of a system or system component. A system or system component may have more than one unique identifier. Identification methods are sufficient to support a forensic investigation after a supply chain compromise or event.",
        "relatedControls": "IA-2, IA-8, PE-16, PL-2."
    },
    {
        "controlIdentifier": "SR-4(3)",
        "controlName": "Provenance | Validate as Genuine and Not Altered",
        "controlText": "Employ the following controls to validate that the system or system component received is genuine and has not been altered: [Assignment: organization-defined controls].",
        "discussion": "For many systems and system components, especially hardware, there are technical means to determine if the items are genuine or have been altered, including optical and nanotechnology tagging, physically unclonable functions, side-channel analysis, cryptographic hash verifications or digital signatures, and visible anti-tamper labels or stickers. Controls can also include monitoring for out of specification performance, which can be an indicator of tampering or counterfeits. Organizations may leverage supplier and contractor processes for validating that a system or component is genuine and has not been altered and for replacing a suspect system or component. Some indications of tampering may be visible and addressable before accepting delivery, such as inconsistent packaging, broken seals, and incorrect labels. When a system or system component is suspected of being altered or counterfeit, the supplier, contractor, or original equipment manufacturer may be able to replace the item or provide a forensic capability to determine the origin of the counterfeit or altered item. Organizations can provide training to personnel on how to identify suspicious system or component deliveries.",
        "relatedControls": "AT-3, SR-9, SR-10, SR-11."
    },
    {
        "controlIdentifier": "SR-4(4)",
        "controlName": "Provenance | Supply Chain Integrity — Pedigree",
        "controlText": "Employ [Assignment: organization-defined controls] and conduct [Assignment: organization-defined analysis] to ensure the integrity of the system and system components by validating the internal composition and provenance of critical or mission-essential technologies, products, and services.",
        "discussion": "Authoritative information regarding the internal composition of system components and the provenance of technology, products, and services provides a strong basis for trust. The validation of the internal composition and provenance of technologies, products, and services is referred to as the pedigree. For microelectronics, this includes material composition of components. For software this includes the composition of open-source and proprietary code, including the version of the component at a given point in time. Pedigrees increase the assurance that the claims suppliers assert about the internal composition and provenance of the products, services, and technologies they provide are valid. The validation of the internal composition and provenance can be achieved by various evidentiary artifacts or records that manufacturers and suppliers produce during the research and development, design, manufacturing, acquisition, delivery, integration, operations and maintenance, and disposal of technology, products, and services. Evidentiary artifacts include, but are not limited to, software identification (SWID) tags, software component inventory, the manufacturers’ declarations of platform attributes (e.g., serial numbers, hardware component inventory), and measurements (e.g., firmware hashes) that are tightly bound to the hardware itself.",
        "relatedControls": "RA-3."
    },
    {
        "controlIdentifier": "SR-5",
        "controlName": "Acquisition Strategies, Tools, and Methods",
        "controlText": "Employ the following acquisition strategies, contract tools, and procurement methods to protect against, identify, and mitigate supply chain risks: [Assignment: organization-defined acquisition strategies, contract tools, and procurement methods].",
        "discussion": "The use of the acquisition process provides an important vehicle to protect the supply chain. There are many useful tools and techniques available, including obscuring the end use of a system or system component, using blind or filtered buys, requiring tamper-evident packaging, or using trusted or controlled distribution. The results from a supply chain risk assessment can guide and inform the strategies, tools, and methods that are most applicable to the situation. Tools and techniques may provide protections against unauthorized production, theft, tampering, insertion of counterfeits, insertion of malicious software or backdoors, and poor development practices throughout the system development life cycle. Organizations also consider providing incentives for suppliers who implement controls, promote transparency into their processes and security and privacy practices, provide contract language that addresses the prohibition of tainted or counterfeit components, and restrict purchases from untrustworthy suppliers. Organizations consider providing training, education, and awareness programs for personnel regarding supply chain risk, available mitigation strategies, and when the programs should be employed. Methods for reviewing and protecting development plans, documentation, and evidence are commensurate with the security and privacy requirements of the organization. Contracts may specify documentation protection requirements.",
        "relatedControls": "AT-3, SA-2, SA-3, SA-4, SA-5, SA-8, SA-9, SA-10, SA-15, SR-6, SR-9, SR-10, SR-11."
    },
    {
        "controlIdentifier": "SR-5(1)",
        "controlName": "Acquisition Strategies, Tools, and Methods | Adequate Supply",
        "controlText": "Employ the following controls to ensure an adequate supply of [Assignment: organization-defined critical system components]: [Assignment: organization-defined controls].",
        "discussion": "Adversaries can attempt to impede organizational operations by disrupting the supply of critical system components or corrupting supplier operations. Organizations may track systems and component mean time to failure to mitigate the loss of temporary or permanent system function. Controls to ensure that adequate supplies of critical system components include the use of multiple suppliers throughout the supply chain for the identified critical components, stockpiling spare components to ensure operation during mission-critical times, and the identification of functionally identical or similar components that may be used, if necessary.",
        "relatedControls": "RA-9."
    },
    {
        "controlIdentifier": "SR-5(2)",
        "controlName": "Acquisition Strategies, Tools, and Methods | Assessments Prior to Selection, Acceptance, Modification, or Update",
        "controlText": "Assess the system, system component, or system service prior to selection, acceptance, modification, or update.",
        "discussion": "Organizational personnel or independent, external entities conduct assessments of systems, components, products, tools, and services to uncover evidence of tampering, unintentional and intentional vulnerabilities, or evidence of non-compliance with supply chain controls. These include malicious code, malicious processes, defective software, backdoors, and counterfeits. Assessments can include evaluations; design proposal reviews; visual or physical inspection; static and dynamic analyses; visual, x-ray, or magnetic particle inspections; simulations; white, gray, or black box testing; fuzz testing; stress testing; and penetration testing (see SR-6(1)). Evidence generated during assessments is documented for follow-on actions by organizations. The evidence generated during the organizational or independent assessments of supply chain elements may be used to improve supply chain processes and inform the supply chain risk management process. The evidence can be leveraged in follow-on assessments. Evidence and other documentation may be shared in accordance with organizational agreements.",
        "relatedControls": "CA-8, RA-5, SA-11, SI-7."
    },
    {
        "controlIdentifier": "SR-6",
        "controlName": "Supplier Assessments and Reviews",
        "controlText": "Assess and review the supply chain-related risks associated with suppliers or contractors and the system, system component, or system service they provide [Assignment: organization-defined frequency].",
        "discussion": "An assessment and review of supplier risk includes security and supply chain risk management processes, foreign ownership, control or influence (FOCI), and the ability of the supplier to effectively assess subordinate second-tier and third-tier suppliers and contractors. The reviews may be conducted by the organization or by an independent third party. The reviews consider documented processes, documented controls, all-source intelligence, and publicly available information related to the supplier or contractor. Organizations can use open-source information to monitor for indications of stolen information, poor development and quality control practices, information spillage, or counterfeits. In some cases, it may be appropriate or required to share assessment and review results with other organizations in accordance with any applicable rules, policies, or inter-organizational agreements or contracts.",
        "relatedControls": "SR-3, SR-5."
    },
    {
        "controlIdentifier": "SR-6(1)",
        "controlName": "Supplier Assessments and Reviews | Testing and Analysis",
        "controlText": "Employ [Selection (one or more): organizational analysis; independent third-party analysis; organizational testing; independent third-party testing] of the following supply chain elements, processes, and actors associated with the system, system component, or system service: [Assignment: organization-defined supply chain elements, processes, and actors].",
        "discussion": "Relationships between entities and procedures within the supply chain, including development and delivery, are considered. Supply chain elements include organizations, entities, or tools that are used for the research and development, design, manufacturing, acquisition, delivery, integration, operations, maintenance, and disposal of systems, system components, or system services. Supply chain processes include supply chain risk management programs; SCRM strategies and implementation plans; personnel and physical security programs; hardware, software, and firmware development processes; configuration management tools, techniques, and measures to maintain provenance; shipping and handling procedures; and programs, processes, or procedures associated with the production and distribution of supply chain elements. Supply chain actors are individuals with specific roles and responsibilities in the supply chain. The evidence generated and collected during analyses and testing of supply chain elements, processes, and actors is documented and used to inform organizational risk management activities and decisions.",
        "relatedControls": "CA-8, SI-4."
    },
    {
        "controlIdentifier": "SR-7",
        "controlName": "Supply Chain Operations Security",
        "controlText": "Employ the following Operations Security (OPSEC) controls to protect supply chain-related information for the system, system component, or system service: [Assignment: organization-defined Operations Security (OPSEC) controls].",
        "discussion": "Supply chain OPSEC expands the scope of OPSEC to include suppliers and potential suppliers. OPSEC is a process that includes identifying critical information, analyzing friendly actions related to operations and other activities to identify actions that can be observed by potential adversaries, determining indicators that potential adversaries might obtain that could be interpreted or pieced together to derive information in sufficient time to cause harm to organizations, implementing safeguards or countermeasures to eliminate or reduce exploitable vulnerabilities and risk to an acceptable level, and considering how aggregated information may expose users or specific uses of the supply chain. Supply chain information includes user identities; uses for systems, system components, and system services; supplier identities; security and privacy requirements; system and component configurations; supplier processes; design specifications; and testing and evaluation results. Supply chain OPSEC may require organizations to withhold mission or business information from suppliers and may include the use of intermediaries to hide the end use or users of systems, system components, or system services.",
        "relatedControls": "SC-38."
    },
    {
        "controlIdentifier": "SR-8",
        "controlName": "Notification Agreements",
        "controlText": "Establish agreements and procedures with entities involved in the supply chain for the system, system component, or system service for the [Selection (one or more): notification of supply chain compromises; results of assessments or audits; [Assignment: organization-defined information]].",
        "discussion": "The establishment of agreements and procedures facilitates communications among supply chain entities. Early notification of compromises and potential compromises in the supply chain that can potentially adversely affect or have adversely affected organizational systems or system components is essential for organizations to effectively respond to such incidents. The results of assessments or audits may include open-source information that contributed to a decision or result and could be used to help the supply chain entity resolve a concern or improve its processes.",
        "relatedControls": "IR-4, IR-6, IR-8."
    },
    {
        "controlIdentifier": "SR-9",
        "controlName": "Tamper Resistance and Detection",
        "controlText": "Implement a tamper protection program for the system, system component, or system service.",
        "discussion": "Anti-tamper technologies, tools, and techniques provide a level of protection for systems, system components, and services against many threats, including reverse engineering, modification, and substitution. Strong identification combined with tamper resistance and/or tamper detection is essential to protecting systems and components during distribution and when in use.",
        "relatedControls": "PE-3, PM-30, SA-15, SI-4, SI-7, SR-3, SR-4, SR-5, SR-10, SR-11."
    },
    {
        "controlIdentifier": "SR-9(1)",
        "controlName": "Tamper Resistance and Detection | Multiple Stages of System Development Life Cycle",
        "controlText": "Employ anti-tamper technologies, tools, and techniques throughout the system development life cycle.",
        "discussion": "The system development life cycle includes research and development, design, manufacturing, acquisition, delivery, integration, operations and maintenance, and disposal. Organizations use a combination of hardware and software techniques for tamper resistance and detection. Organizations use obfuscation and self-checking to make reverse engineering and modifications more difficult, time-consuming, and expensive for adversaries. The customization of systems and system components can make substitutions easier to detect and therefore limit damage.",
        "relatedControls": "SA-3."
    },
    {
        "controlIdentifier": "SR-10",
        "controlName": "Inspection of Systems or Components",
        "controlText": "Inspect the following systems or system components [Selection (one or more): at random; at [Assignment: organization-defined frequency], upon [Assignment: organization-defined indications of need for inspection]] to detect tampering: [Assignment: organization-defined systems or system components].",
        "discussion": "The inspection of systems or systems components for tamper resistance and detection addresses physical and logical tampering and is applied to systems and system components removed from organization-controlled areas. Indications of a need for inspection include changes in packaging, specifications, factory location, or entity in which the part is purchased, and when individuals return from travel to high-risk locations.",
        "relatedControls": "AT-3, PM-30, SI-4, SI-7, SR-3, SR-4, SR-5, SR-9, SR-11."
    },
    {
        "controlIdentifier": "SR-11(1)",
        "controlName": "Component Authenticity | Anti-counterfeit Training",
        "controlText": "Train [Assignment: organization-defined personnel or roles] to detect counterfeit system components (including hardware, software, and firmware).",
        "discussion": "None.",
        "relatedControls": "AT-3."
    },
    {
        "controlIdentifier": "SR-11(2)",
        "controlName": "Component Authenticity | Configuration Control for Component Service and Repair",
        "controlText": "Maintain configuration control over the following system components awaiting service or repair and serviced or repaired components awaiting return to service: [Assignment: organization-defined system components].",
        "discussion": "None.",
        "relatedControls": "CM-3, MA-2, MA-4, SA-10."
    },
    {
        "controlIdentifier": "SR-11(3)",
        "controlName": "Component Authenticity | Anti-counterfeit Scanning",
        "controlText": "Scan for counterfeit system components [Assignment: organization-defined frequency].",
        "discussion": "The type of component determines the type of scanning to be conducted (e.g., web application scanning if the component is a web application).",
        "relatedControls": "RA-5."
    },
    {
        "controlIdentifier": "SR-12",
        "controlName": "Component Disposal",
        "controlText": "Dispose of [Assignment: organization-defined data, documentation, tools, or system components] using the following techniques and methods: [Assignment: organization-defined techniques and methods].",
        "discussion": "Data, documentation, tools, or system components can be disposed of at any time during the system development life cycle (not only in the disposal or retirement phase of the life cycle). For example, disposal can occur during research and development, design, prototyping, or operations/maintenance and include methods such as disk cleaning, removal of cryptographic keys, partial reuse of components. Opportunities for compromise during disposal affect physical and logical data, including system documentation in paper-based or digital files; shipping and delivery documentation; memory sticks with software code; or complete routers or servers that include permanent media, which contain sensitive or proprietary information. Additionally, proper disposal of system components helps to prevent such components from entering the gray market.",
        "relatedControls": "MP-6."
    
}];

module.exports = controlsSeedData;
