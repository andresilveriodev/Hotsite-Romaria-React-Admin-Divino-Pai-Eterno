# react-admin

## Installation

Install the application dependencies by running:

```sh
npm install
```

## Development

Start the application in development mode by running:

```sh
npm run dev
```

## Production

Build the application in production mode by running:

```sh
npm run build
```

## DataProvider

The included data provider use [FakeREST](https://github.com/marmelab/fakerest) to simulate a backend.
You'll find a `data.json` file in the `src` directory that includes some fake data for testing purposes.

It includes two resources, posts and comments.
Posts have the following properties: `id`, `title` and `content`.
Comments have the following properties: `id`, `post_id` and `content`.

## Tests

You can run the included tests with the following command:

```sh
npm run test
# or
yarn run test
```
