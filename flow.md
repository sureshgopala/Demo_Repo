flowchart TD

A[Workflow Trigger: Plan Owner Initiates Plan] --> B["Send Email to Reviewer (BCM Admin)"]

B --> C{Reviewer Approves?}

C -- Yes --> D[Move to First Approver]
C -- No --> R1[Reject at Reviewer Stage]

D --> E{First Approver Approves?}

E -- Yes --> F[Move to Second Approver]
E -- No --> R2[Reject at First Approver Stage]

F --> G{Second Approver Approves?}

G -- Yes --> H[Final Approval Completed ✅]
G -- No --> R3[Reject at Second Approer Stage]

%% Rejection Notifications
R1 --> N1[Notify: Reviewer, Maintainer, Plan Owner]
R2 --> N2[Notify: Reviewer, First Approver, Maintainer, Plan Owner]
R3 --> N3[Notify: Reviewer, First Approver, Second Approver, Maintainer, Plan Owner]

%% Re-trigger after rejection
N1 --> RT[Plan Owner Re-triggers Workflow]
N2 --> RT
N3 --> RT

RT --> A

%% Additional note
N1 --> Note1[Maintainer & Plan Owner review rejection in system]
N2 --> Note1
N3 --> Note1
