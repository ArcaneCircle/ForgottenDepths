# Forgotten Depths

"Forgotten Depths: Path of the Necromancer" is a simplified roguelite,
deck building game where you will craft cards, and customized your deck
to take on the undead and their masters.

(ported to WebXDC from https://github.com/dbrad/js13k2022)

## Developing

### Installing Dependencies

After cloning this repo, install dependecies:

```
pnpm i
```

### Testing the app in the browser

To test your work in your browser (with hot reloading!) while developing:

```
pnpm dev-mini
# Alternatively to test in a more advanced WebXDC emulator:
pnpm dev
```

### Building

To package the WebXDC file:

```
pnpm build
```

The resulting optimized `.xdc` file is saved in `dist-xdc/` folder.

### Releasing

To automatically build and create a new GitHub release with the `.xdc` file:

```
git tag -a v1.0.1
git push origin v1.0.1
```
