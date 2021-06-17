export function validateTitle(val) {
  const trimmed = val.trim();
  if (trimmed.length <= 3) return 'Title is too short';

  //galima daug regex validaciju pasiguglint, pvz. only letters regex ir t.t.
  if (!/^[a-z ,.'-]+$/i.test(trimmed)) return 'Only letters please';

  return false;
}
