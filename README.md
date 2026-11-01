# MiniKode.Builder
# MiniKode.Builder

**A custom programming language playground for building interactive web experiences with MiniKode.**

MiniKode.Builder is a browser-based development environment for **MiniKode**, a custom programming language designed to make creating web content easier and more approachable.

Instead of writing everything in HTML, CSS, and JavaScript, MiniKode lets you use its own commands and syntax to create elements, change styles, handle events, manage variables, and build interactive projects.

## ✨ Features

- **Custom Programming Language:** Write code using MiniKode's own syntax.
- **Live Preview:** Run your code and see the results directly in the editor.
- **Interactive Elements:** Create buttons, text, containers, and other HTML elements.
- **Styling:** Customize the appearance of elements using MiniKode commands.
- **Events:** Make elements respond to clicks and other interactions.
- **Variables:** Store and reuse values in your programs.
- **Loops and Conditions:** Repeat commands and make decisions in your code.
- **Physics:** Experiment with basic physics properties and movement.
- **Built-in Templates:** Start with examples such as Hello World, Counter, Todo, Cards, and Physics.
- **Code Tools:** Run, format, save, load, and clear your code.

## 🚀 Getting Started

You don't need to install anything to use MiniKode.Builder.

1. Open the MiniKode.Builder website.
2. Write your code in the editor.
3. Press **Run** to execute your program.
4. View the result in the preview panel.
5. Check the console for messages and errors.

## 📖 MiniKode Basics

MiniKode programs use a starting tag and an ending tag:

```minikode
BMK

// Your MiniKode code goes here

EMK
```

For example, you can create an element:

```minikode
BMK

create h1#title -> app {
    text: "Hello, World!"
}

EMK
```

You can also create interactive elements:

```minikode
BMK

create button#myButton -> app {
    text: "Click Me"
}

on #myButton click => log "Button clicked!"

EMK
```

## 📚 Documentation

Need help learning MiniKode?

Visit the **Tutorial & Help** page for explanations, examples, command references, and troubleshooting.

[Open the MiniKode Tutorial](https://roppledoxxer.github.io/MiniKode.Builder/tutorial/tutorial.html)

## 🎯 Project Goals

MiniKode is an experimental programming language project. Its goal is to provide a simpler and more organized way to create interactive web experiences while exploring how a custom programming language can work.

MiniKode.Builder is the development environment where MiniKode can be written, tested, and explored.

## 🛠️ Technologies

- HTML
- CSS
- JavaScript

MiniKode currently runs inside a browser-based environment.

## 📌 Project Status

MiniKode is a work in progress. Features, commands, syntax, and the development environment may change as the project continues to improve.

## 👨‍💻 Creator

Created by **Roppledoxxer**.

---

**MiniKode.Builder — Build something different.**
