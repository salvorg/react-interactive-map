import React, {useState} from 'react';
import {MapContainer, Marker, Popup, TileLayer, useMapEvents} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L, {LatLngExpression} from 'leaflet';

// Тип для маркера
interface MarkerData {
  position: LatLngExpression;
  text: string;
}

// Иконка маркера
const defaultIcon = new L.Icon({
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Компонент для добавления маркеров по клику
interface AddMarkerProps {
  markers: MarkerData[];
  setMarkers: React.Dispatch<React.SetStateAction<MarkerData[]>>;
}

const AddMarker: React.FC<AddMarkerProps> = ({ markers, setMarkers }) => {
  useMapEvents({
    click(e) {
      const newMarker: MarkerData = {
        position: e.latlng,
        text: '' // Оставляем текст пустым для последующего ввода
      };
      setMarkers([...markers, newMarker]);
    },
  });
  return null;
};

const Map: React.FC = () => {
  const [markers, setMarkers] = useState<MarkerData[]>([]);

  // Обработчик для обновления описания маркера
  const handleDescriptionChange = (index: number, newText: string) => {
    const updatedMarkers = markers.map((marker, i) =>
      i === index ? { ...marker, text: newText } : marker
    );
    setMarkers(updatedMarkers);
  };

  // Обработчик удаления маркера
  const handleRemove = (positionToRemove: LatLngExpression) => {
    setMarkers((prevMarkers) =>
      prevMarkers.filter((marker) => marker.position !== positionToRemove)
    );
  }

  console.log(markers);

  return (
    <MapContainer center={[41.2044, 74.7661]}
                  zoom={8}
                  scrollWheelZoom={true}
                  style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Добавление маркера по клику */}
      <AddMarker markers={markers} setMarkers={setMarkers} />

      {/* Отображение всех маркеров */}
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position} icon={defaultIcon}>
          <Popup>
            <div>
              <textarea
                value={marker.text}
                onChange={(e) => handleDescriptionChange(index, e.target.value)}
                placeholder="Введите описание маркера"
                style={{ width: '15rem', height: '7rem' }}
              />
            </div>
            <div>
              <button style={{ backgroundColor: "red" }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemove(marker.position);
                      }}>
                delete</button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
