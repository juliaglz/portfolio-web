export interface Project {
  name: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    name: "Microcontroller",
    description: "Design, synthesize, and simulation of a simple microcontroller in Verilog",
    stack: ["Verilog"],
    github: "https://github.com/juliaglz/Microcontroller",
  },
  {
    name: "CSCE3513_TeamProject",
    description: "A laser tag game management system that handles team setup, player assignment, game countdowns, and in-game screen navigation.",
    stack: ["Python", " pynput", "psycopg2-binary", "tkinter"],
    github: "https://github.com/juliaglz/CSCE3513_TeamProject",
  },
];
