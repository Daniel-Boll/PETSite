import * as firebase from "firebase/app";
import "firebase/database";
import {Projeto} from '../objects/Projeto'

const pathProjects = 'Projects';

class ProjectDataHandler {
    
    // Função para pegar todos os projetos

    static async getAllProjects() {
        let data = (await firebase
            .database()
            .ref(pathProjects)
            .once('value'))
            .val();
        
        if(data === null) {
            return [];
        }
        
        let ret = [];
        
        for(var id in data) {
          ret.push(this.formatProjectFromDb(id, data[id]));
        }
        
        return ret;
    }

    // Inserir ID no Project
    
    static formatProjectFromDb(dbId, dbProject) {
      dbProject.id = dbId;
      return dbProject;
    }

    // Pegar um projeto pelo ID
    
    static async getProjectFromId(idProject) {
        let data = (await firebase
            .database()
            .ref(pathProjects)
            .child(idProject)
            .once('value'))
            .val();
        
        return this.formatProjectFromDb(idProject, data);
    }

    static deleteProject(projectId) {
      return firebase
              .database()
              .ref(pathProjects+'/' + projectId)
              .remove();
    }

    // Popular o banco
    
    static updateDatabase(projectInfo) {     
      let projects = [
        Projeto(
          projectInfo.nomeP,
          projectInfo.descricaoP,
          projectInfo.fotoP,
          projectInfo.urlP,
          projectInfo.oldP,
        )
      ];

      for(var project of projects) {   
        firebase
          .database()
          .ref(pathProjects+'/'+projectInfo.idP)
          .update(project);
      }
    }
    
    static populateDatabase(projectInfo) {
      let projects = [
        Projeto(
          projectInfo.nomeP,
          projectInfo.descricaoP,
          projectInfo.fotoP,
          projectInfo.urlP,
          projectInfo.oldP,
        )
      ];

      for(var project of projects) {      
        firebase
          .database()
          .ref(pathProjects)
          .push()
          .set(project);
      }
    }
}

export default ProjectDataHandler;