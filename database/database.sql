-- Active: 1697426326784@@localhost@5432@tarealista@public

CREATE TABLE table_lista(
    id SERIAL NOT NULL,
    nombre character varying(255),
    apellido character varying(255),
    activo boolean DEFAULT true,
    fechaborra timestamp without time zone,
    PRIMARY KEY(id)
);