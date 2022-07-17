import { linksProviders } from '../data/linkProviders'


export const makerLinkProvider = ( provider, titulo ) =>{
    let link = ''
    let transform = ''

    const removeAccents = (str) => {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    } 
    switch (provider) {
        
    case 10:
        return link.concat(linksProviders.primeVideo, encodeURI(titulo))
        
    case 35:
        transform = titulo.replaceAll(':','')
        transform = transform.replaceAll(' ','-')
        transform = transform.replaceAll('.','')
       

        return link.concat(linksProviders.rakuten,transform)
        
    case 'netflix':
        return link.concat(linksProviders.netflix, encodeURI(titulo))
        
    case 337:
        return linksProviders.disney
        
    case 3:
        return link.concat(linksProviders.google, encodeURI(titulo), '&c=movies&gl=ES')
        
    case 68:
        return link.concat(linksProviders.microsoft, encodeURI(titulo))
    case 149:
        return link.concat(linksProviders.movistar, encodeURI(titulo))
    case 64:
        transform = titulo.replaceAll(':','')
        transform = transform.replaceAll(' ','-')
        transform = transform.replaceAll('.','')
        transform = transform.toLocaleLowerCase()
        return link.concat(linksProviders.filmin,removeAccents(transform))
    case 384:
        return linksProviders.hbo
        
    default:
        break
    }
}