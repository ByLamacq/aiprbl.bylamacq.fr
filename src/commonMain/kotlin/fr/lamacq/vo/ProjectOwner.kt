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
 * Room data class ProjectOwner
 *
 * @author baptiste.lamacq@gmail.com (LAMACQ Baptiste)
 *
 */


data class ProjectOwner (
    val id: Long,
    val entity: String, // PERSONNE_MORALE or PERSONNE_PHYSIQUE
    val name: String,
    val service: String,
    val address: String,
    val postalCode: String,
    val city: String,
    val phone: String,
    val country: String)