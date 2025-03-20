interface Bird {
  eat(): void;
  run(): void;
}

interface FlayingBird {
  fly(): void;
}

interface SwingBird{
    swing(): void;
}

class Rucan implements Bird, FlayingBird {
  fly() {}
  eat() {}
  run() {}
}

class Hubbard implements Bird, FlayingBird {
  fly() {}
  eat() {}
  run() {}
}

class Ostrich implements Bird {
  eat() {}
  run() {}
}

class Penguin implements Bird, SwingBird {
  eat() {}
  run() {}
  swing() {}
}
