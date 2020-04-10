import * as firebase from "firebase/app";
import "firebase/database";
import {Membro, ICV} from '../objects/Membro';

const pathMembers = 'Members';

class MemberDataHandler {
    
    // Função para pegar todos os membros

    static async getAllMembers() {
        let data = (await firebase
            .database()
            .ref(pathMembers)
            .once('value'))
            .val();
        
        if(data === null) {
            return [];
        }
        
        let ret = [];
        
        for(var id in data) {
          ret.push(this.formatMemberFromDb(id, data[id]));
        }
        
        return ret;
    }

    // Inserir ID no member
    
    static formatMemberFromDb(dbId, dbMember) {
      dbMember.id = dbId;
      return dbMember;
    }

    // Pegar um membro pelo ID
    
    static async getMemberFromId(idMember) {
        let data = (await firebase
            .database()
            .ref(pathMembers)
            .child(idMember)
            .once('value'))
            .val();
        
        return this.formatMemberFromDb(idMember, data);
    }

    // Atualizar membro
    
    static async updateMember(Member) {
      return firebase
          .database()
          .ref(pathMembers)
          .child(Member.id)
          .set(Member);
    }

    // Popular o banco
    
    static updateDatabase(memberInfo) {
      // var memberRef = firebase.child(pathMembers+'/'+memberInfo.id);
      // memberRef.update({
      //   nome: memberInfo.nome,
      //   descricao: memberInfo.descricao,
      //   foto: memberInfo.foto,
      //   lattes: memberInfo.lattes,
      //   icv:{
      //     year: memberInfo.icv.ano,
      //     title: memberInfo.icv.titulo,
      //     description: memberInfo.icv.descricao,
      //     advisor: memberInfo.icv.orientador
      //   }
      // });
      
      let members = [
        Membro(
                memberInfo.nome,
                memberInfo.descricao,
                memberInfo.email,
                memberInfo.lattes,
                memberInfo.foto,
                ICV(
                    memberInfo.icv.ano,
                    memberInfo.icv.titulo,
                    memberInfo.icv.orientador,
                    memberInfo.icv.descricao
                    // null
                )
        )
      ];

      for(var member of members) {   
        firebase
          .database()
          .ref(pathMembers+'/'+memberInfo.id)
          .update(member);
      }
    }

    static populateDatabase(memberInfo) {
      let members = [
        Membro(
                memberInfo.nome,
                memberInfo.descricao,
                memberInfo.email,
                memberInfo.lattes,
                memberInfo.foto,
                ICV(
                    memberInfo.icv.ano,
                    memberInfo.icv.titulo,
                    memberInfo.icv.orientador,
                    memberInfo.icv.descricao
                    // null
                )
        )
      ];

      for(var member of members) {      
        firebase
          .database()
          .ref(pathMembers)
          .push()
          .set(member);
      }
    }
}

export default MemberDataHandler;