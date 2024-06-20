import { PersistedStorage } from "./persisted-storage";

export class JournalEntry {
  lastEntryDate: any;
  storage: PersistedStorage;

  constructor() {
    this.lastEntryDate = new Date();
    this.storage = new PersistedStorage({ name: "journals" });
  }

  promptEntry() {
    const today = new Date();
    let title;
    let content;

    // Prompt Streak Notification
    // Prompt Streak Removed After Two Days

    // Check if user already entered today
    if (
      this.storage.get().length > 0 &&
      this.lastEntryDate.getDate() === today.getDate() &&
      this.lastEntryDate.getMonth() === today.getMonth() &&
      this.lastEntryDate.getFullYear() === today.getFullYear()
    ) {
      console.log("You already wrote your journal entry for today. Great job!");
      return;
    }

    // Prompt user for entry

    if (typeof window !== "undefined") {
      title = prompt("Enter a title for your journal entry:");
      content = prompt("Write your journal entry for today:");
    }

    if (title && content) {
      console.log("**", title, "**");
      console.log(content);

      const entries = [...this.storage.get(), { title, content, date: today }];
      this.storage.save(entries); // Save entries to local storage

      this.lastEntryDate = today; // Update last entry date
      console.log("Your entry has been saved.");
    } else {
      console.log("No entry saved. Please try again later.");
    }
  }
}

const journalEntry = new JournalEntry();

export default journalEntry;
