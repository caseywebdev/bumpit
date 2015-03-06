# Bumpit

Easily bump versions for your package.json, bower.json, and/or component.json
from the command line.

Install
-------

```bash
npm install -g bumpit
```

bumpit [major|minor|patch|build|tag] [version]
----

```bash
> bumpit
0.0.0 -> 0.0.1
> bumpit 0.1.2-3
0.0.1 -> 0.1.2-3
> bumpit
0.1.2-3 -> 0.1.2-4
> bumpit major
0.1.2-4 -> 1.0.0
> bumpit minor 3
1.0.0 -> 1.3.0
> bumpit 1.4.0alpha
1.4.0 -> 1.4.0alpha
> bumpit tag beta
1.4.0alpha -> 1.4.0beta
```
