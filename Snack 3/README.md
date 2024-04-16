# Consegna

Snack 1:
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.


## Soluzione

- [ ] Scorriamo tutto l'array di oggetti con un ciclo forEach
    - controlliamo il tipo di alimentazione 
        - in base al tipo facciamo partire una funzione che si occupa di creare l'array contentente le automobili con l'alimentazione corrispondente