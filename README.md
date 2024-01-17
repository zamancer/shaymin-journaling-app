# Shaymin - The gratitude app

The Shaymin project is a gratitude journaling app that aims to help me (Alan) become happier and more grateful.

The app will have a simple interface that allows me (and eventually other users) to write down what they are grateful for using a local db or private db provider.

> Built with [Remix](https://remix.run/docs)

## Getting Started

From your terminal:

```sh
pnpm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
pnpm run build
```

Then run the app in production mode:

```sh
pnpm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`
