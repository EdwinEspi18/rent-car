-- CreateEnum
CREATE TYPE "STATUS_BOOKING" AS ENUM ('PENDING', 'SUCCESS', 'DECLINE', 'PAY_PAYMENT');

-- CreateEnum
CREATE TYPE "ROLE" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "STATUS_DISPONIBILIDAD" AS ENUM ('DISPONIBLE', 'EN_USO', 'MANTENIMIENTO', 'FUERA_DE_SERVICIO', 'EN_REPARACION');

-- CreateEnum
CREATE TYPE "COMBUSTIBLE" AS ENUM ('GASOLINA', 'DIESEL', 'GAS_NATURAL', 'GAS_PROPANO');

-- CreateEnum
CREATE TYPE "TIPO_VEHICULO" AS ENUM ('SEDAN', 'JEEPETAS', 'FAMILIAR', 'OFF_ROAD', 'DELUXE');

-- CreateEnum
CREATE TYPE "TRACCION" AS ENUM ('DELANTERA', 'TRASERA', 'TOTAL');

-- CreateTable
CREATE TABLE "usuarios" (
    "id_user" TEXT NOT NULL,
    "nombre_completo" TEXT NOT NULL,
    "num_cedula" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "role" "ROLE" DEFAULT 'USER',
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "reservas" (
    "id_reservas" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "vehiculoId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "subtotal" DOUBLE PRECISION NOT NULL,
    "itbis" DOUBLE PRECISION NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "status" "STATUS_BOOKING" DEFAULT 'PENDING',
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "reservas_pkey" PRIMARY KEY ("id_reservas")
);

-- CreateTable
CREATE TABLE "vehiculos" (
    "id_car" TEXT NOT NULL,
    "marcaId" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "n_chasis" TEXT NOT NULL,
    "precio_alquiler" DOUBLE PRECISION NOT NULL,
    "kilometraje" INTEGER NOT NULL,
    "cant_pasajeros" INTEGER NOT NULL,
    "placa" TEXT NOT NULL,
    "categoria" "TIPO_VEHICULO" NOT NULL,
    "status" "STATUS_DISPONIBILIDAD" DEFAULT 'DISPONIBLE',
    "traccion" "TRACCION" DEFAULT 'DELANTERA',
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "vehiculos_pkey" PRIMARY KEY ("id_car")
);

-- CreateTable
CREATE TABLE "marca_vehiculo" (
    "id_marca" TEXT NOT NULL,
    "marca" TEXT NOT NULL,

    CONSTRAINT "marca_vehiculo_pkey" PRIMARY KEY ("id_marca")
);

-- CreateTable
CREATE TABLE "facturas" (
    "id_factura" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "vehiculoId" TEXT NOT NULL,
    "bookingId" TEXT NOT NULL,

    CONSTRAINT "facturas_pkey" PRIMARY KEY ("id_factura")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_num_cedula_key" ON "usuarios"("num_cedula");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_telefono_key" ON "usuarios"("telefono");

-- CreateIndex
CREATE INDEX "usuarios_id_user_num_cedula_telefono_idx" ON "usuarios"("id_user", "num_cedula", "telefono");

-- CreateIndex
CREATE INDEX "reservas_id_reservas_status_idx" ON "reservas"("id_reservas", "status");

-- CreateIndex
CREATE INDEX "vehiculos_id_car_age_status_idx" ON "vehiculos"("id_car", "age", "status");

-- CreateIndex
CREATE INDEX "marca_vehiculo_marca_idx" ON "marca_vehiculo"("marca");

-- CreateIndex
CREATE UNIQUE INDEX "facturas_userId_key" ON "facturas"("userId");

-- CreateIndex
CREATE INDEX "facturas_id_factura_idx" ON "facturas"("id_factura");

-- AddForeignKey
ALTER TABLE "reservas" ADD CONSTRAINT "reservas_vehiculoId_fkey" FOREIGN KEY ("vehiculoId") REFERENCES "vehiculos"("id_car") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservas" ADD CONSTRAINT "reservas_userId_fkey" FOREIGN KEY ("userId") REFERENCES "usuarios"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehiculos" ADD CONSTRAINT "vehiculos_marcaId_fkey" FOREIGN KEY ("marcaId") REFERENCES "marca_vehiculo"("id_marca") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "facturas" ADD CONSTRAINT "facturas_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "reservas"("id_reservas") ON DELETE RESTRICT ON UPDATE CASCADE;
