(() => {
  // No aplicando el principio de responsabilidad única

  type Gender = "M" | "F";

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  interface UsersProps {
    email: string;
    role: string;
  }

  interface SettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  interface UserSettingsProps extends PersonProps, UsersProps, SettingsProps {}

  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  class User {
    public lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ email, role }: UsersProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  class UserSettings {
    public person: Person;
    public user: User;
    public setting: Settings;

    constructor({
      birthdate,
      email,
      gender,
      lastOpenFolder,
      name,
      role,
      workingDirectory
    }: UserSettingsProps) {
      this.person = new Person({name,gender, birthdate})
      this.user = new User({email, role})
      this.setting = new Settings({lastOpenFolder,workingDirectory})
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: "/usr/home",
    lastOpenFolder: "/home",
    email: "fernando@google.com",
    role: "Admin",
    name: "Fernando",
    gender: "M",
    birthdate: new Date("1985-10-21"),
  });

  console.log({ userSettings });
})();
