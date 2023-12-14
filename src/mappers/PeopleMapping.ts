
import { PeopleDto } from '../dto';

class PeopleMapping {

    private peopleDto: PeopleDto;

    constructor(varpeopleDTO) {
      this.peopleDto = varpeopleDTO;
    }
  
    toSpanish() {
      const { peopleDto } = this
      console.log('peopleDto:', peopleDto);
      return {
        id: peopleDto.id,
        fecha_nacimiento: peopleDto.birth_year,
        color_ojos: peopleDto.eye_color,
        director: peopleDto.director,
        genero: peopleDto.gender,
        color_cabello: peopleDto.hair_color,
        altura: peopleDto.height,
        planeta_natal: peopleDto.homeworld,
        masa: peopleDto.mass,
        nombre: peopleDto.name,
        color_piel: peopleDto.skin_color,
        creado: peopleDto.created,
        editado: peopleDto.edited,
        especies: peopleDto.species,
        naves_espaciales: peopleDto.starships,
        url: peopleDto.url,
        vehiculos: peopleDto.vehicles
      }
    }
  }
  
  export default PeopleMapping