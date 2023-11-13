import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="jumbotron">
        <h2>
          Exploring Flavors, <br>
          Savoring Moments.
        </h2>
        <img src="./images/heros/hero-image_2.jpg" alt="">
      </div>
      <div class="content">
        <h2 class="content__heading"><span>Restoran: Makanan, Minuman, dan Suasana Terbaik</span></h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    try {
      const restaurants = await RestaurantSource.listRestaurants();
      const restaurantsContainer = document.querySelector('#restaurants');
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (error) {
      console.error('Error rendering restaurant list:', error);
    }
  },
};

export default Home;
