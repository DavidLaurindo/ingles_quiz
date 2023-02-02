import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'Come', [
        RespostaModel.errada('Ir/foi'),
        RespostaModel.errada('Vamos/fomos'),
        RespostaModel.errada('vai/irá'),
        RespostaModel.certa('vir/venho'),
    ]
    ),
    new QuestaoModel(202, 'They', [
        RespostaModel.errada('onde'),
        RespostaModel.errada('aquele/aquela'),
        RespostaModel.errada('nós'),
        RespostaModel.certa('Eles/Elas'),
    ]
    ),
    new QuestaoModel(203, 'our', [
        RespostaModel.errada('Ou'),
        RespostaModel.errada('Aqui'),
        RespostaModel.errada('Eu/Nos'),
        RespostaModel.certa('Nosso/Nossa'),
    ]
    ),
    new QuestaoModel(204, 'to', [
        RespostaModel.errada('onde'),
        RespostaModel.errada('quando'),
        RespostaModel.errada('ir'),
        RespostaModel.certa('Para'),
    ]
    ),
]

export default questoes