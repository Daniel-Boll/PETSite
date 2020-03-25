import React, {Component} from 'react';
import DataHandler from '../../data/DataHandler'

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            nome: '',
            descricao: '',
            email: '',
            lattes: '',
            icv: {
                ano: '2019',
                titulo: 'blá blá blá G.A.',
                orientador: 'Adair',
                descricao: 'That\'s a lot of damage',
                pastICV: []
            }
        }
    }

    handleNameChange = e => {
        this.setState({nome: e.target.value});
    }

    handleDescriptionChange = e => {
        this.setState({descricao: e.target.value});
    }

    handleEmailChange = e => {
        this.setState({email: e.target.value});
    }

    handleLattesChange = e => {
        this.setState({lattes: e.target.value});
    }
    
    handleInsert = () => {
        console.table("Nome: "+this.state.nome);
        console.table("Descricao: "+this.state.descricao);
        console.table("Email: "+this.state.email);
        console.table("Lattes: "+this.state.lattes);

        DataHandler.populateDatabase(this.state);
    }
    
    render() {
        return (
            <>
                <form>
                    <input type="text" name="nome" placeholder="Nome do Membro" value={this.state.nome} onChange={this.handleNameChange} />
                    <input type="text" name="descricao" placeholder="Descrição (breve) do ICV" value={this.state.descricao} onChange={this.handleDescriptionChange} />
                    <input type="text" name="email" placeholder="Email do Membro" value={this.state.email} onChange={this.handleEmailChange} />
                    <input type="text" name="lates" placeholder="Link para o lattes" value={this.state.lattes} onChange={this.handleLattesChange} />
                    <button type="button" onClick={this.handleInsert}>Inserir</button>
                </form>
            </>
        )
    }
}

export default Form;