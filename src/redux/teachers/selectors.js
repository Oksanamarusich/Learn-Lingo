import { createSelector } from '@reduxjs/toolkit';

export const selectTeachers = state => state.teachers.teachers;
export const selectFilters = state => state.filters.filters;

export const selectVisibleTeachers = createSelector(
  [selectTeachers, selectFilters],
  (teachers, filters) => {
    if (!filters) {
      return teachers;
    }

    const { languages, levels, price_per_hour } = filters;

    return teachers.filter(teacher => {
      const languageFilterResult =
        !languages || teacher.languages.includes(languages);
      const levelFilterResult = !levels || teacher.levels.includes(levels);
      const priceFilterResult =
  !price_per_hour || parseInt(teacher.price_per_hour) <= parseInt(price_per_hour);
      return languageFilterResult && levelFilterResult && priceFilterResult;
    });
  }
);


// const priceFilterResult =
//         !price_per_hour || teacher.price_per_hour <= price_per_hour;