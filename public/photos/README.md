# Photos

Drop your favorite photos here as `.jpg`, `.png`, or `.webp`.

Then update the `photos` array in `app/components/Photos.tsx` to point at them:

```ts
const photos = [
  { src: "/photos/college.jpg", caption: "First year of college", tilt: -3 },
  ...
];
```

Set `src: null` to keep a placeholder card.
