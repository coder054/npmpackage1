const { useSearchParams } = require("react-router-dom");

function isFooString(str) {
  return str === "foo";
}

function useQueryParamsState(key, defaultValue) {
  const [searchParams, setSearchParams] = useSearchParams({
    [key]: defaultValue,
  });
  const state = searchParams.get(key);
  const setState = (data) => {
    return setSearchParams((prev) => {
      data === undefined ? prev.delete(key) : prev.set(key, data);
    });
  };
  return [state, setState];
}

module.exports = { isFooString, useQueryParamsState };
