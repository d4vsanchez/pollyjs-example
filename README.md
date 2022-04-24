# Polly Test

Demo the features from [Polly.js](https://netflix.github.io/pollyjs) that let us
record, replay, and stub HTTP interactions in our JavaScript applications.

This is a simple application that fetches an image of a dog 🐶 and shows its
breed.

## How to run the example

```bash
$ git clone https://github.com/d4vsanchez/pollyjs-example.git
$ cd pollyjs-example
$ yarn
$ yarn dev
```

And then go to [http://localhost:3000](http://localhost:3000)

## How to test

### Record the initial request

Remove the provided HAR files created by Polly:

```bash
$ rm -r ./__tests__/__recordings__
```

Run the server (we need to do the real HTTP requests):

```bash
$ yarn dev
```

In another tab, execute the tests:

```bash
$ yarn test
```

It must re-create the `__recurring__` folder.

### Using the pre-made records

No need to run the server, make sure it's turned-off. Execute the tests:

```bash
$ yarn test
```

It must work correctly.
