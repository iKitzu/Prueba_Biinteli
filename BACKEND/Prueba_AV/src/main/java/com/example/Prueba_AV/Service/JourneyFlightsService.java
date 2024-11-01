package com.example.Prueba_AV.Service;

import com.example.Prueba_AV.Model.Flight;
import com.example.Prueba_AV.Model.Journey;
import com.example.Prueba_AV.Model.JourneyFlights;
import com.example.Prueba_AV.Model.JourneyWithFlightsDTO;
import com.example.Prueba_AV.Repository.JourneyFlightsRepository;
import com.example.Prueba_AV.Repository.JourneyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class JourneyFlightsService {

    @Autowired
    private JourneyRepository journeyRepository;

    @Autowired
    private JourneyFlightsRepository journeyFlightsRepository;

    public List<JourneyFlights> getAllJourneyFlights(){
        return journeyFlightsRepository.findAll();
    }

    public Optional<JourneyFlights> getJourneyFlightsById(Long id){
        return journeyFlightsRepository.findById(id);
    }

    public JourneyWithFlightsDTO getJourneyWithFlights(Long journeyId) {
        Journey journey = journeyRepository.findById(journeyId)
                .orElseThrow(() -> new RuntimeException("Journey not found"));

        List<JourneyWithFlightsDTO.FlightDTO> flights = journeyFlightsRepository.findByJourneyId(journeyId)
                .stream()
                .map(jf -> {
                    Flight flight = jf.getFlight_id();
                    JourneyWithFlightsDTO.FlightDTO flightDTO = new JourneyWithFlightsDTO.FlightDTO();
                    flightDTO.setOrigin(flight.getOrigin());
                    flightDTO.setDestination(flight.getDestination());
                    flightDTO.setPrice(flight.getPrice());
                    flightDTO.setTransport(flight.getTransport_id());
                    return flightDTO;
                })
                .collect(Collectors.toList());

        JourneyWithFlightsDTO journeyWithFlightsDTO = new JourneyWithFlightsDTO();
        journeyWithFlightsDTO.setOrigin(journey.getOrigin());
        journeyWithFlightsDTO.setDestination(journey.getDestination());
        journeyWithFlightsDTO.setPrice(journey.getPrice());
        journeyWithFlightsDTO.setFlights(flights);

        return journeyWithFlightsDTO;
    }
}
