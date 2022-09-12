-- CreateTable
CREATE TABLE "FlushSystem" (
    "id" SERIAL NOT NULL,
    "flushTypes" JSONB NOT NULL,

    CONSTRAINT "FlushSystem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShowerModel" (
    "id" SERIAL NOT NULL,
    "consumptionPerMinute" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ShowerModel_pkey" PRIMARY KEY ("id")
);
