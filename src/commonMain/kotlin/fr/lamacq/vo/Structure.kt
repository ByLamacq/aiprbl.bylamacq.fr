/*
 * Copyright 2019 Humming Apps
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package fr.lamacq.vo



/**
 * Room data class Structure
 *
 * @author baptiste.lamacq@gmail.com (LAMACQ Baptiste)
 *
 */

// Ouvrage
data class Structure (
    val id: Long,
    val structureContact: StructureContact,
    val structureCategorie: String, //S or NS or NSFS
    val structureClass: String,
    val structureCode: String,
    val status: String, // ACTIF
    val creationDate: String)