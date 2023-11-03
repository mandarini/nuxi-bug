# Nuxi regression with cwd

This is a repository which contains the following:

1. A script that calls `nuxi` programmatically with `runCommand`
2. A nuxt application (`my-nuxt-app`).
3. The `nuxt` app contains just a page that says "Hello from Katerina", here is the code: [my-nuxt-app/app.vue](my-nuxt-app/app.vue)

## The issue

Using `"nuxi": "^3.9.1"` and `runCommand("dev", ["my-nuxt-app"])`, `runCommand` ignores the name of the project (the directory), and runs the command in the root directory.

I would expect this to work exactly like running:

```bash
npx nuxi dev my-nuxt-app
```

If you run the above command, you will see that it works as expected.

If you run

```bash
npx tsx run-nuxt.ts
```

you will see that it does not pick up the directory, and runs the command in the root directory, it shows the default Nuxt template, instead of "Hello from Katerina".