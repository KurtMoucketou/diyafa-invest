import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import FuturisticBackground from '../components/ui/FuturisticBackground';

// Données des biens
const properties = [
  {
    id: 1,
    title: 'Appartement de luxe Gauthier',
    category: 'Rbnb',
    type: 'location',
    price: '2 500 MAD/nuit',
    totalPrice: '4 500 000 MAD',
    location: 'Gauthier, Casablanca',
    surface: '120 m²',
    bedrooms: 3,
    image: 'https://images.unsplash.com/photo-1560448204-5d9b3e6bb6db?w=800',
    description: 'Magnifique appartement avec vue sur mer, terrasse privée et piscine.',
    features: ['Piscine', 'Parking', 'Smart Home', 'Vue mer']
  },
  {
    id: 2,
    title: 'Villa moderne Bouskoura',
    category: 'Achat',
    type: 'vente',
    price: 'N/A',
    totalPrice: '8 900 000 MAD',
    location: 'Bouskoura, Casablanca',
    surface: '350 m²',
    bedrooms: 5,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800',
    description: 'Superbe villa contemporaine avec jardin paysager et piscine chauffée.',
    features: ['Jardin', 'Piscine', 'Garage 3 places', 'Domotique']
  },
  {
    id: 3,
    title: 'Studio équipé Racine',
    category: 'Location',
    type: 'location',
    price: '8 500 MAD/mois',
    totalPrice: 'N/A',
    location: 'Racine, Casablanca',
    surface: '45 m²',
    bedrooms: 1,
    image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800',
    description: 'Studio moderne entièrement équipé, idéal pour jeune actif.',
    features: ['Meublé', 'Climatisation', 'Ascenseur', 'Proche tram']
  },
  {
    id: 4,
    title: 'Duplex vue mer Anfa',
    category: 'Rbnb',
    type: 'location',
    price: '3 200 MAD/nuit',
    totalPrice: '6 200 000 MAD',
    location: 'Anfa, Casablanca',
    surface: '180 m²',
    bedrooms: 4,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    description: 'Duplex exceptionnel avec terrasse panoramique sur l\'océan.',
    features: ['Terrasse', 'Jacuzzi', 'Home cinéma', 'Vue mer']
  },
  {
    id: 5,
    title: 'Bureau premium CFC',
    category: 'Vente',
    type: 'vente',
    price: 'N/A',
    totalPrice: '3 200 000 MAD',
    location: 'CFC, Casablanca',
    surface: '85 m²',
    bedrooms: 0,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
    description: 'Bureau de standing en plein centre financier.',
    features: ['Open space', 'Salle de réunion', 'Parking', 'Sécurité 24/7']
  },
  {
    id: 6,
    title: 'Appartement famille Gauthier',
    category: 'Achat',
    type: 'vente',
    price: 'N/A',
    totalPrice: '5 200 000 MAD',
    location: 'Gauthier, Casablanca',
    surface: '155 m²',
    bedrooms: 4,
    image: 'https://images.unsplash.com/photo-1560185009-dddeb820c1a1?w=800',
    description: 'Grand appartement familial avec balcon et vue dégagée.',
    features: ['Balcon', 'Cuisine équipée', 'Gardien', 'Proche écoles']
  },
];

const categories = ['Tous', 'Rbnb', 'Location', 'Achat', 'Vente'];
const types = ['Tous', 'location', 'vente'];

export default function CataloguePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedType, setSelectedType] = useState('Tous');

  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           property.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Tous' || property.category === selectedCategory;
      const matchesType = selectedType === 'Tous' || property.type === selectedType;
      return matchesSearch && matchesCategory && matchesType;
    });
  }, [searchTerm, selectedCategory, selectedType]);

  return (
    <div>
      {/* Header futuriste */}
      <FuturisticBackground 
        title="Notre Catalogue"
        subtitle="Découvrez notre sélection exclusive de biens d'exception"
      />

      {/* Section catalogue */}
      <div className="bg-[#1E1E1E] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Barre de recherche */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Rechercher un bien, un quartier..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#C6A43F] transition"
              />
              <svg className="absolute right-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Filtres */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 justify-center mb-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full transition ${
                    selectedCategory === cat
                      ? 'bg-[#C6A43F] text-black font-semibold'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-full transition ${
                    selectedType === type
                      ? 'bg-[#C6A43F] text-black font-semibold'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {type === 'location' ? 'Location' : type === 'vente' ? 'Vente' : 'Tous'}
                </button>
              ))}
            </div>
          </div>

          {/* Grille des biens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#C6A43F]/50 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      property.type === 'location' ? 'bg-blue-500/80' : 'bg-green-500/80'
                    }`}>
                      {property.type === 'location' ? '📍 Location' : '💰 Vente'}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#C6A43F] text-black">
                      {property.category}
                    </span>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{property.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{property.location}</p>
                  <p className="text-gray-300 text-sm mb-4">{property.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div><span className="text-gray-500">Surface:</span> {property.surface}</div>
                    <div><span className="text-gray-500">Chambres:</span> {property.bedrooms}</div>
                  </div>

                  <div className="mb-4">
                    <div className="text-[#C6A43F] font-bold text-lg">
                      {property.type === 'location' ? property.price : property.totalPrice}
                    </div>
                    {property.type === 'vente' && (
                      <div className="text-gray-500 text-xs">Prix d'achat</div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-[#C6A43F] text-black py-2 rounded-lg font-semibold hover:bg-[#A88B35] transition">
                    {property.type === 'location' ? '📍 Réserver' : '💰 Contacter'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Message si aucun résultat */}
          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">Aucun bien ne correspond à vos critères.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}