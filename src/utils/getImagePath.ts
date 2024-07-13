export default function getImagePath(usn: string) {
  try {
    require(`@/../public/rankers/${usn}.jpg`);
    return `/rankers/${usn}.jpg`;
  } catch (e) {
    return `/default_profile.png`;
  }
}
