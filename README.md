![Untitled](https://user-images.githubusercontent.com/56782318/130915609-c143cce0-bafd-4c83-8a36-452fd37c6ae2.png)

_This application acts as a portal for the public to keep track of COVID-19._ 

The data has been represented in the forms -
- Doughnut Chart  
- Line Chart (Worldwide cases in the last 10 days)
- Table (Country wise data for total confirmed cases and total deaths)

### Our Application
![image](https://user-images.githubusercontent.com/56782318/130914374-557bd744-cda3-4172-8462-2675439372f4.png)

### Git Commands used
- **git config** – The git config command is used to set Git configuration values like author name and email on a global or local project level.
```
$ git config --global user.name "Shreya Vaidya"
$ git config --global user.email shreyakvaidya@gmail.com
```

- **git init** – The git init command creates a new Git repository. Other Git commands are not available outside of an initialized repository, so this is usually the first command which is made to run.

- **git clone** – The git clone command creates a copy of an existing Git repository and stores it on your local machine.
```
$ git clone https://github.com/shreyavaidya2311/project.git
```

- **git log** – The git log command is used to review all the commits previously made in the repository.

- **git branch** – 
Shows list of all branches in the repository.
```
$ git branch
```

- **git branch <branch_name>** –
Creates new branch called dev_shreya but does not checkout to it.
```
$ git branch dev_shreya
```

- **git branch -d <branch_name>** –
Deletes the branch called dev_shreya.
```
$ git branch -d dev_shreya
```

- **git checkout** –
Makes the head point to the branch dev_shreya and switches branches.
```
$ git checkout dev_shreya
```

- **git checkout -b <branch_name>** –
Creates new branch called dev_shreya and checks out to it.
```
$ git checkout -b dev_shreya
```

- **git add <file_name>** –
Adds main.c to staging area.
```
$ git add main.c
```

- **git add .** –
Adds all files with uncommitted changes to the staging area.
```
$ git add .
```

- **git commit** – Commits the files added to the staging area to the current branch with given commit message.
```
$ git commit -m “feat: new feature added” 
```

- **git push** – Pushes all changes committed previously to the remote repository to the branch master.
```
$ git push origin master 
```

- **git pull** – Used to fetch and download content from a remote repository and immediately update the local repository to match that content.
```
$ git pull 
```

- **git stash** - 
Used to temporarily to store the changes you have made to your local directory so that you can work on something else. 
```
$ git stash
```

- **git stash pop** -
Used to retrieve the temporarily stashed changes from the staging area. 
```
$ git stash pop
```
