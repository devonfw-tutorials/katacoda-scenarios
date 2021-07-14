To demonstrate devon4j migrate you would need a sample devon4j project with any older version. Here, we have already created a project with an older version i.e. 2020.08.001 for you. 

It is already cloned in workspace using restoreWorkspace.

Execute below command for project migration from an older version to the latest version.



We want to execute the command in a different directory so you have to change your current directory.
With the next command we also open a new terminal, so you have to execute the command twice 
`cd devon4j-app-4tutorial `{{execute T1}}. 

Run devon java migrate with this bash-command.
`devon java migrate `{{execute T1}} 

You will see the message similar to the one below, if project migrated successfully.
`Successfully applied 4 migrations to migrate project from version devon4j:2020.08.001 to devon4j:2021.04.002.`

Here, 2020.08.001 is the devon4j&#39;s older version and 2021.04.002 is devon4j&#39;s latest version.



