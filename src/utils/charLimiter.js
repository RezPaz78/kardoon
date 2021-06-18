export const charLimiter = (name, limit) => {
  let finalName = "";
  if (name.length > limit) {
    finalName = name.substring(0, limit) + "...";
    return finalName;
  } else {
    return name;
  }
};
