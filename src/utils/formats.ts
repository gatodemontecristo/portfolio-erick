export const getCurrentAgeFromBirthDate = (birthDate: string): string => {
  try {
    const match = birthDate.match(/^(\d{2})-(\d{2})-(\d{4})$/);

    if (!match) {
      return '0';
    }

    const day = Number(match[1]);
    const month = Number(match[2]);
    const year = Number(match[3]);
    const birth = new Date(year, month - 1, day);

    const isValidDate =
      birth.getFullYear() === year &&
      birth.getMonth() === month - 1 &&
      birth.getDate() === day;

    if (!isValidDate) {
      return '0';
    }

    const today = new Date();
    let age = today.getFullYear() - year;

    const hasHadBirthdayThisYear =
      today.getMonth() > month - 1 ||
      (today.getMonth() === month - 1 && today.getDate() >= day);

    if (!hasHadBirthdayThisYear) {
      age -= 1;
    }

    return age >= 0 ? age.toString() : '0';
  } catch {
    return '0';
  }
};
