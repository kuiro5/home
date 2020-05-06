import React from "react";
import styled from "styled-components";
import Layout from "../../../components/Layout";

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SanFrancisco = () => {
  return (
    <Layout>
      <h2>San Francisco</h2>
      <Section>
        <h3>Restaurants</h3>
        <li>The House | Asian | North Beach</li>
        <li>Seven Hills | Italian | Russian Hill</li>
        <li>Al's Place | Vegetarian | Mission</li>
        <li>Burma Superstar | Burmese | Richmond</li>
        <li>Shabu House | Japanese | Inner Richmond</li>
        <li>Pancho Villa | Mexican (Burritos) | Mission</li>
        <li>La Taqueria | Mexican (Burritos) | Mission</li>
        <li>Cellarmaker Pizza | Pizza | Mission</li>
        <li>Hindodeya | Ramen | FiDi/Japantown</li>
        <li>Velvet Cantina | Mexican | Mission</li>
        <li>State Bird Provisions | Mexican | NOPA</li>
        <li>NOPA | Californian | NOPA</li>
        <li>Rich Table | Californian | Hayes Valley</li>
        <li>Ramen Yamadaya | Ramen | Japantown</li>
        <li>Octavia | Californian | Pacific Heights</li>
        <li>Namu Stonepot | Korean | NOPA</li>
        <li>Mister Jiu's | Chinese | Chinatown</li>
        <li>Maykadeh | Persian | North Beach</li>
        <li>Mama's | Brunch | North Beach</li>
        <li>Kaiju Cooks | Ramen | Inner Richmond</li>
        <li>Akikos | Sushi | Nob Hill</li>
        <li>Slanted Door | Vietnamese | Embarcadero</li>
        <li>Dragon Beaux | Chinese | Inner Richmond</li>
        <li>Frascati | Mediterranean | Russian Hill</li>
        <li>Za Pizza | Pizza | Russian Hill</li>
        <li>Liholiho Yacht Club | Hawaiian | Tenderloin</li>
        <li>Farmhouse Thai | Thai | Mission</li>
      </Section>

      <Section>
        <h3>{"Breweries, Wine, & Bars"}</h3>
        <li>The Page | Bar | Haight</li>
        <li>Homestead | Bar | Mission</li>
        <li>The Den | Bar | Mission</li>
        <li>Zam Zam | Bar | Haight</li>
        <li>El Rio | Bar | Mission</li>
        <li>Hi-Lo Club | Bar | Russian Hill</li>
        <li>Vesuvio | Bar | North Beach</li>
        <li>Wish | Bar | SOMA</li>
        <li>The Interval | Bar | Marina</li>
        <li>Mikeller | Bar | Tenderloin</li>
        <li>Barebottle Brewing Company | Brewery | Bernal Heights</li>
        <li>Fieldwork | Brewery | Berkeley</li>
        <li>Alamanac | Brewery | Alameda</li>
        <li>Rare Barrel | Brewery | Berkeley</li>
      </Section>

      <Section>
        <h3>{"Cafes & Coffee Shops"}</h3>
        <li>111 Minna | Coffee | SOMA</li>
        <li>Four Barrel | Coffee | Mission</li>
        <li>Ritual | Coffee | Hayes Valley</li>
        <li>Cento | Coffee | SOMA</li>
        <li>Saint Frank | Coffee | Russian Hill</li>
        <li>Philz | Coffee | Mission</li>
        <li>Orson’s Belly | Cafe | Richmond</li>
      </Section>

      <Section>
        <h3>{"Arts, Parks, & Entertainment"}</h3>
        <li>Lover’s Lane (Andy Goldsworthy) | Art/Park | Presidio</li>
        <li>De Young | Museum | Sunset</li>
        <li>SFMOMA | Museum | SOMA</li>
        <li>Washington Square | Park | North Beach</li>
        <li>Alamo Square | Park | NOPA</li>
        <li>George Sterling | Park (Basketball) | Russian Hill</li>
        <li>Botanic Garden | Park | Sunset (Golden Gate Park)</li>
      </Section>

      <Section>
        <h3>{"Hiking, Biking, & Camping"}</h3>
        <li>Matt Davis-Dipsea Loop | Hiking | Mt. Tam</li>
        <li>Alamere Falls | Hiking | Point Reyes</li>
        <li>Hawk Hill | Biking | Marin Headlands</li>
        <li>Paradise Loop | Biking | Marin Headlands</li>
        <li>Lower/Upper Pines | Camping | Yosemite</li>
        <li>Emerald Bay | Camping | Tahoe</li>
      </Section>

      <Section>
        <h3>{"Delivery & Take-out"}</h3>
        <li>Little Delhi | Indian | Tenderloin</li>
        <li>Lemongrass | Thai | Russian Hill</li>
        <li>Hahn's Hibachi | Korean | Nob Hill</li>
        <li>Wasabi and Ginger | Sushi | Russian Hill</li>
        <li>Halal Guys | Middle Eastern | Tenderloin</li>
        <li>Wok Shop Cafe | Chinese | Nob Hill</li>
        <li>The Boys' Deli | Deli | Russian Hill</li>
      </Section>
    </Layout>
  );
};

export default SanFrancisco;
