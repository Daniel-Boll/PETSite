import * as firebase from "firebase/app";
import "firebase/database";
import {Membro, ICV, FAQ, POLYGON} from '../objects/Membro';

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

    static deleteMember(memberId) {
      return firebase
              .database()
              .ref(pathMembers+'/' + memberId)
              .remove();
    }

    // Popular o banco
    
    static updateDatabase(memberInfo) {     
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
                ),
                FAQ(
                  memberInfo.faq.city,
                  memberInfo.faq.ycs,
                  memberInfo.faq.ifncs,
                  memberInfo.faq.aa,
                  memberInfo.faq.hp,
                  memberInfo.faq.bk,
                  memberInfo.faq.mv,
                  memberInfo.faq.gm,
                  memberInfo.faq.mc,
                  memberInfo.faq.fd,
                ),
                POLYGON(
                  memberInfo.polygon.option_1,
                  memberInfo.polygon.value_1,
                  memberInfo.polygon.option_2,
                  memberInfo.polygon.value_2,
                  memberInfo.polygon.option_3,
                  memberInfo.polygon.value_3,
                  memberInfo.polygon.option_4,
                  memberInfo.polygon.value_4,
                  memberInfo.polygon.option_5,
                  memberInfo.polygon.value_5
                ),
                memberInfo.old
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
                ),
                FAQ(
                  memberInfo.faq.city,
                  memberInfo.faq.ycs,
                  memberInfo.faq.ifncs,
                  memberInfo.faq.aa,
                  memberInfo.faq.hp,
                  memberInfo.faq.bk,
                  memberInfo.faq.mv,
                  memberInfo.faq.gm,
                  memberInfo.faq.mc,
                  memberInfo.faq.fd,
                ),
                POLYGON(
                  memberInfo.polygon.option_1,
                  memberInfo.polygon.value_1,
                  memberInfo.polygon.option_2,
                  memberInfo.polygon.value_2,
                  memberInfo.polygon.option_3,
                  memberInfo.polygon.value_3,
                  memberInfo.polygon.option_4,
                  memberInfo.polygon.value_4,
                  memberInfo.polygon.option_5,
                  memberInfo.polygon.value_5
                ),
                memberInfo.old
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