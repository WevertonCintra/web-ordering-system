import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

// left, top, right, bottom

type OrderData = {
  id: string
  created_date: string
  delivery_date: string
  client: {
    name: string
    city: string
  }
}

export function DownloadPDF(orders: OrderData[]) {
  function formattedDate(date: string) {
    const [ year, month, day ] = date.substring(0, 10).split('-')

    const formatted = format(new Date(
      Number(year), (Number(month) - 1), Number(day)),
      "dd/MM/Y", 
      { locale: ptBR }
    )
    
    return formatted
  }

  pdfMake.vfs = pdfFonts.pdfMake.vfs

  const title = [{ text: 'Pedidos', fontSize: 18, bold: true, margin: [30, 20, 0, 30] }]

  const datas = orders.map((order) => {
    return [
      { text: order.client.name, fontSize: 12, margin: [0, 3, 0, 3] },
      { text: formattedDate(order.created_date), fontSize: 12, margin: [0, 3, 0, 3] },
      { text: formattedDate(order.delivery_date), fontSize: 12, margin: [0, 3, 0, 3] },
      { text: order.client.city, fontSize: 12, margin: [0, 3, 0, 3] }
    ] 
})
  
  const details = [{ 
    table: {
      headerRows: 1,
      widths: ['*', '*', '*', '*'],
      body: [
        [
            { text: 'Cliente', style: 'tableHeader', fontSize: 14 },
            { text: 'data do pedido', style: 'tableHeader', fontSize: 14 },
            { text: 'data da entrega', style: 'tableHeader', fontSize: 14 },
            { text: 'cidade', style: 'tableHeader', fontSize: 14 }
        ], ...datas
      ]
    }, 
    layout: 'lightHorizontalLines' }
  ] // headerLineOnly

  function Baseboard(currentPage: string, pageCount: number) {
    return [{ text: currentPage + ' / ' + pageCount, alignment: 'right', fontSize: 10, margin: [0, 10, 20, 0] }]
  }

  const docConfigurations: any = {
    pageSize: 'A4',
    pageMargins: [30, 50, 30, 30],
    header: [title],
    content: [details],
    footer: Baseboard
  }

  pdfMake.createPdf(docConfigurations).download()
}