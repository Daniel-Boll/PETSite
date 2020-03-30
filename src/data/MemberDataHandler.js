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
    
    static populateDatabase(memberInfo) {
      let members = [
        Membro(
                memberInfo.nome,
                memberInfo.descricao,
                memberInfo.email,
                memberInfo.lattes,
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