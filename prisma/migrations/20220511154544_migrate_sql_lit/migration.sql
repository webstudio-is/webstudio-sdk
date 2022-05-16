-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "prodTreeId" TEXT,
    "devTreeId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "History" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "entry" TEXT NOT NULL,
    "projectId" TEXT,
    CONSTRAINT "History_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "Tree" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "root" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "InstanceProps" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "instanceId" TEXT NOT NULL,
    "treeId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Props" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "prop" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "instancePropsId" TEXT,
    CONSTRAINT "Props_instancePropsId_fkey" FOREIGN KEY ("instancePropsId") REFERENCES "InstanceProps" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Breakpoints" (
    "treeId" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "Breakpoint" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "label" TEXT NOT NULL,
    "minWidth" INTEGER NOT NULL,
    "breakpointsTreeId" TEXT,
    CONSTRAINT "Breakpoint_breakpointsTreeId_fkey" FOREIGN KEY ("breakpointsTreeId") REFERENCES "Breakpoints" ("treeId") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_domain_key" ON "Project"("domain");
