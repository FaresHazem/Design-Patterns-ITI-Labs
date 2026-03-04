class CountriesService {
  getCountries() {
    console.log("Source: real service");
    return ["Egypt", "France", "Japan", "Brazil"];
  }
}

class CountriesProxy {
  constructor() {
    this.service = new CountriesService();
    this.cachedCountries = null;
  }

  getCountries() {
    if (this.cachedCountries) {
      console.log("Source: cache");
      return this.cachedCountries;
    }

    this.cachedCountries = this.service.getCountries();
    return this.cachedCountries;
  }
}

export default CountriesProxy;
