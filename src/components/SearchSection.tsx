import { useState } from "react";
import { Search, Filter, X, BookOpen, Users, Calendar, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";

const SearchSection = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const searchCategories = [
    { id: "all", label: "Todo", icon: Search },
    { id: "features", label: "Características", icon: BookOpen },
    { id: "pricing", label: "Precios", icon: FileText },
    { id: "team", label: "Equipo", icon: Users },
    { id: "events", label: "Eventos", icon: Calendar }
  ];

  const searchResults = [
    {
      id: 1,
      title: "Colaboración en Tiempo Real",
      description: "Trabaja con tu equipo en proyectos universitarios de forma sincronizada",
      category: "features",
      type: "Característica"
    },
    {
      id: 2,
      title: "Plan Básico - Gratis",
      description: "Acceso completo a herramientas básicas de gestión de proyectos",
      category: "pricing",
      type: "Precio"
    },
    {
      id: 3,
      title: "Gestión de Equipos",
      description: "Organiza y coordina equipos de trabajo académico eficientemente",
      category: "team",
      type: "Funcionalidad"
    },
    {
      id: 4,
      title: "Integración con Google Calendar",
      description: "Sincroniza deadlines y eventos importantes automáticamente",
      category: "events",
      type: "Integración"
    }
  ];

  const filteredResults = searchResults.filter(result => {
    const matchesQuery = result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        result.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === "all" || result.category === selectedFilter;
    return matchesQuery && matchesFilter;
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSelectedFilter("all");
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <section id="search" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Encuentra lo que Necesitas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Busca información específica sobre características, precios y funcionalidades de UniProject
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative">
            <div className="flex items-center space-x-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Buscar características, precios, funcionalidades..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="pl-10 pr-10 h-12 text-lg"
                  aria-label="Campo de búsqueda"
                />
                {searchQuery && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearSearch}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    aria-label="Limpiar búsqueda"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
              
              <Button
                variant="outline"
                onClick={toggleFilter}
                className="h-12 px-4"
                aria-label="Abrir filtros"
                aria-expanded={isFilterOpen}
              >
                <Filter className="h-5 w-5 mr-2" />
                Filtros
              </Button>
            </div>
          </div>

          {/* Filter Options */}
          {isFilterOpen && (
            <div className="mt-4 p-4 bg-background border rounded-lg shadow-lg">
              <h3 className="font-semibold mb-3">Filtrar por categoría:</h3>
              <div className="flex flex-wrap gap-2">
                {searchCategories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <Button
                      key={category.id}
                      variant={selectedFilter === category.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedFilter(category.id)}
                      className="flex items-center space-x-2"
                    >
                      <IconComponent className="h-4 w-4" />
                      <span>{category.label}</span>
                    </Button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Search Results */}
        <div className="max-w-4xl mx-auto">
          {searchQuery || selectedFilter !== "all" ? (
            <div>
              <div className="mb-4 text-sm text-muted-foreground">
                {filteredResults.length} resultado{filteredResults.length !== 1 ? 's' : ''} encontrado{filteredResults.length !== 1 ? 's' : ''}
                {searchQuery && ` para "${searchQuery}"`}
              </div>
              
              <div className="space-y-4">
                {filteredResults.length > 0 ? (
                  filteredResults.map((result) => (
                    <div
                      key={result.id}
                      className="p-6 bg-background border rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-lg font-semibold">{result.title}</h3>
                            <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                              {result.type}
                            </span>
                          </div>
                          <p className="text-muted-foreground">{result.description}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No se encontraron resultados</h3>
                    <p className="text-muted-foreground">
                      Intenta con otros términos de búsqueda o ajusta los filtros
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">¿Qué estás buscando?</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Utiliza la barra de búsqueda para encontrar información específica sobre UniProject
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchSection;