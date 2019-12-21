import { results } from './SinaPlot.stories';

test('basic construction', () => {
  expect(results.basic.outerHTML).toMatchInlineSnapshot(`
    "<div style=\\"min-width: 200px; min-height: 300px; width: 400px; height: 600px; max-width: 600px; max-height: 800px; border: 1px solid black; resize: both; overflow: hidden;\\"><svg viewBox=\\"
            35.33333333333334
            -191.66666666666663
            153
            231.66666666666666\\" preserveAspectRatio=\\"xMidYMid meet\\" style=\\"width: 100%; height: 100%; display: inline-block; overflow: hidden;\\"><svg viewBox=\\"
            83.33333333333334
            -166.66666666666663
            100 166.66666666666666\\" preserveAspectRatio=\\"xMidYMid meet\\" style=\\"width: 100%; height: 100%; display: inline-block; overflow: hidden;\\" x=\\"83.33333333333334\\" y=\\"-166.66666666666663\\" width=\\"100\\" height=\\"166.66666666666666\\"><rect x=\\"83.33333333333334\\" y=\\"-166.66666666666663\\" width=\\"100\\" height=\\"166.66666666666666\\" fill=\\"none\\"></rect><line fill=\\"grey\\" stroke=\\"lightgrey\\" stroke-width=\\"0.5\\" x1=\\"111.11111111111111\\" y1=\\"0\\" x2=\\"111.11111111111111\\" y2=\\"-166.66666666666663\\"></line><line fill=\\"grey\\" stroke=\\"lightgrey\\" stroke-width=\\"0.5\\" x1=\\"138.88888888888889\\" y1=\\"0\\" x2=\\"138.88888888888889\\" y2=\\"-166.66666666666663\\"></line><line fill=\\"grey\\" stroke=\\"lightgrey\\" stroke-width=\\"0.5\\" x1=\\"166.66666666666669\\" y1=\\"0\\" x2=\\"166.66666666666669\\" y2=\\"-166.66666666666663\\"></line><line x1=\\"83.33333333333334\\" y1=\\"0\\" x2=\\"183.33333333333334\\" y2=\\"0\\" stroke=\\"grey\\" stroke-width=\\"3\\"></line><line x1=\\"83.33333333333334\\" y1=\\"0\\" x2=\\"83.33333333333334\\" y2=\\"-166.66666666666663\\" stroke=\\"grey\\" stroke-width=\\"3\\"></line><line fill=\\"grey\\" stroke=\\"lightgrey\\" stroke-width=\\"0.5\\" x1=\\"83.33333333333334\\" y1=\\"-41.66666666666666\\" x2=\\"183.33333333333334\\" y2=\\"-41.66666666666666\\"></line><line fill=\\"grey\\" stroke=\\"lightgrey\\" stroke-width=\\"0.5\\" x1=\\"83.33333333333334\\" y1=\\"-83.33333333333331\\" x2=\\"183.33333333333334\\" y2=\\"-83.33333333333331\\"></line><line fill=\\"grey\\" stroke=\\"lightgrey\\" stroke-width=\\"0.5\\" x1=\\"83.33333333333334\\" y1=\\"-124.99999999999999\\" x2=\\"183.33333333333334\\" y2=\\"-124.99999999999999\\"></line><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-41.66666666666666\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-39.30555555555555\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-44.02777777777777\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-36.944444444444436\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-46.38888888888888\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-34.58333333333333\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-48.74999999999999\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-32.222222222222214\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-51.1111111111111\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-29.861111111111107\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-53.472222222222214\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-27.499999999999996\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-55.83333333333332\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-25.138888888888886\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-58.194444444444436\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-41.52777777777777\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-41.80555555555555\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"110\\" cy=\\"-41.66666666666666\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"123.8888888888889\\" cy=\\"-41.66666666666666\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"125\\" cy=\\"-41.66666666666666\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"138.88888888888889\\" cy=\\"-41.66666666666666\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"143.88888888888889\\" cy=\\"-41.66666666666666\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"133.88888888888889\\" cy=\\"-41.66666666666666\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"186.11111111111111\\" cy=\\"NaN\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"172.22222222222223\\" cy=\\"-41.66666666666666\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"155\\" cy=\\"-41.66666666666666\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"107.22222222222223\\" cy=\\"-39.30555555555555\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"116.66666666666667\\" cy=\\"-41.66666666666666\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"175\\" cy=\\"-39.30555555555555\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"116.11111111111111\\" cy=\\"-39.30555555555555\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"134.44444444444446\\" cy=\\"-41.66666666666666\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"92.77777777777779\\" cy=\\"-41.66666666666666\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"110\\" cy=\\"-44.02777777777777\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"138.88888888888889\\" cy=\\"-39.30555555555555\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"127.77777777777779\\" cy=\\"-41.66666666666666\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"142.22222222222223\\" cy=\\"-39.30555555555555\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"147.22222222222223\\" cy=\\"-41.66666666666666\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"147.22222222222223\\" cy=\\"-39.30555555555555\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"164.44444444444446\\" cy=\\"-41.66666666666666\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"185.55555555555557\\" cy=\\"NaN\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"124.44444444444446\\" cy=\\"-39.30555555555555\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"108.33333333333334\\" cy=\\"-36.944444444444436\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"113.33333333333334\\" cy=\\"-39.16666666666666\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"163.88888888888889\\" cy=\\"-39.30555555555555\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"176.11111111111111\\" cy=\\"-41.66666666666666\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"107.77777777777779\\" cy=\\"-46.38888888888888\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"100.55555555555556\\" cy=\\"-41.66666666666666\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"163.88888888888889\\" cy=\\"-44.02777777777777\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"105.55555555555556\\" cy=\\"-41.66666666666666\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"138.33333333333334\\" cy=\\"-44.02777777777777\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"102.22222222222223\\" cy=\\"-39.30555555555555\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"121.11111111111111\\" cy=\\"-39.30555555555555\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"108.33333333333334\\" cy=\\"-34.58333333333333\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"141.11111111111111\\" cy=\\"-36.944444444444436\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"106.11111111111111\\" cy=\\"-39.30555555555555\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"169.44444444444446\\" cy=\\"-41.66666666666666\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"123.8888888888889\\" cy=\\"-44.02777777777777\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"182.22222222222223\\" cy=\\"NaN\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"184.44444444444446\\" cy=\\"NaN\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"121.11111111111111\\" cy=\\"-36.944444444444436\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"194.44444444444446\\" cy=\\"NaN\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"117.22222222222223\\" cy=\\"-44.02777777777777\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"112.77777777777779\\" cy=\\"-44.16666666666666\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"168.33333333333334\\" cy=\\"-39.30555555555555\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"133.33333333333334\\" cy=\\"-39.30555555555555\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"126.11111111111111\\" cy=\\"-44.02777777777777\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"139.44444444444446\\" cy=\\"-46.38888888888888\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"177.77777777777777\\" cy=\\"-39.30555555555555\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"105.55555555555556\\" cy=\\"-44.02777777777777\\" r=\\"1.7\\"></circle><circle fill=\\"red\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"131.66666666666669\\" cy=\\"-44.02777777777777\\" r=\\"1.7\\"></circle><circle fill=\\"blue\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-83.33333333333331\\" r=\\"1.7\\"></circle><circle fill=\\"blue\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-80.97222222222221\\" r=\\"1.7\\"></circle><circle fill=\\"blue\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-85.69444444444443\\" r=\\"1.7\\"></circle><circle fill=\\"blue\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-78.6111111111111\\" r=\\"1.7\\"></circle><circle fill=\\"blue\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-88.05555555555554\\" r=\\"1.7\\"></circle><circle fill=\\"blue\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-76.24999999999999\\" r=\\"1.7\\"></circle><circle fill=\\"blue\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-90.41666666666666\\" r=\\"1.7\\"></circle><circle fill=\\"blue\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-73.88888888888887\\" r=\\"1.7\\"></circle><circle fill=\\"blue\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-92.77777777777776\\" r=\\"1.7\\"></circle><circle fill=\\"blue\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-71.52777777777777\\" r=\\"1.7\\"></circle><circle fill=\\"blue\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-95.13888888888887\\" r=\\"1.7\\"></circle><circle fill=\\"blue\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-69.16666666666666\\" r=\\"1.7\\"></circle><circle fill=\\"blue\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-97.49999999999999\\" r=\\"1.7\\"></circle><circle fill=\\"blue\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-66.80555555555554\\" r=\\"1.7\\"></circle><circle fill=\\"blue\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-99.8611111111111\\" r=\\"1.7\\"></circle><circle fill=\\"blue\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-83.19444444444443\\" r=\\"1.7\\"></circle><circle fill=\\"blue\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-83.47222222222221\\" r=\\"1.7\\"></circle><circle fill=\\"blue\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-80.83333333333331\\" r=\\"1.7\\"></circle><circle fill=\\"blue\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"105.55555555555556\\" cy=\\"-83.33333333333331\\" r=\\"1.7\\"></circle><circle fill=\\"blue\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"133.33333333333334\\" cy=\\"-83.33333333333331\\" r=\\"1.7\\"></circle><circle fill=\\"blue\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"113.33333333333334\\" cy=\\"-85.83333333333331\\" r=\\"1.7\\"></circle><circle fill=\\"blue\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"103.33333333333334\\" cy=\\"-83.33333333333331\\" r=\\"1.7\\"></circle><circle fill=\\"blue\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"100\\" cy=\\"-83.33333333333331\\" r=\\"1.7\\"></circle><circle fill=\\"blue\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"150\\" cy=\\"-83.33333333333331\\" r=\\"1.7\\"></circle><circle fill=\\"blue\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-78.47222222222221\\" r=\\"1.7\\"></circle><circle fill=\\"blue\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"140.55555555555557\\" cy=\\"-83.33333333333331\\" r=\\"1.7\\"></circle><circle fill=\\"blue\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"131.66666666666669\\" cy=\\"-80.97222222222221\\" r=\\"1.7\\"></circle><circle fill=\\"blue\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"119.44444444444444\\" cy=\\"-83.33333333333331\\" r=\\"1.7\\"></circle><circle fill=\\"blue\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"130\\" cy=\\"-83.33333333333331\\" r=\\"1.7\\"></circle><circle fill=\\"blue\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"147.22222222222223\\" cy=\\"-83.33333333333331\\" r=\\"1.7\\"></circle><circle fill=\\"blue\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"138.88888888888889\\" cy=\\"-80.97222222222221\\" r=\\"1.7\\"></circle><circle fill=\\"blue\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"122.77777777777779\\" cy=\\"-83.33333333333331\\" r=\\"1.7\\"></circle><circle fill=\\"blue\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"150\\" cy=\\"-80.97222222222221\\" r=\\"1.7\\"></circle><circle fill=\\"blue\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"100\\" cy=\\"-80.97222222222221\\" r=\\"1.7\\"></circle><circle fill=\\"green\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"100\\" cy=\\"-124.99999999999999\\" r=\\"1.7\\"></circle><circle fill=\\"green\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"108.33333333333334\\" cy=\\"-124.99999999999999\\" r=\\"1.7\\"></circle><circle fill=\\"green\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"122.22222222222223\\" cy=\\"-124.99999999999999\\" r=\\"1.7\\"></circle><circle fill=\\"green\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"102.77777777777779\\" cy=\\"-124.99999999999999\\" r=\\"1.7\\"></circle><circle fill=\\"green\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"97.22222222222223\\" cy=\\"-122.63888888888887\\" r=\\"1.7\\"></circle><circle fill=\\"green\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"97.22222222222223\\" cy=\\"-127.36111111111109\\" r=\\"1.7\\"></circle><circle fill=\\"green\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"100\\" cy=\\"-120.27777777777776\\" r=\\"1.7\\"></circle><circle fill=\\"green\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"102.77777777777779\\" cy=\\"-122.63888888888887\\" r=\\"1.7\\"></circle><circle fill=\\"green\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"113.8888888888889\\" cy=\\"-124.99999999999999\\" r=\\"1.7\\"></circle><circle fill=\\"green\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"105.55555555555556\\" cy=\\"-124.99999999999999\\" r=\\"1.7\\"></circle><circle fill=\\"green\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-122.63888888888887\\" r=\\"1.7\\"></circle><circle fill=\\"green\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"111.11111111111111\\" cy=\\"-127.36111111111109\\" r=\\"1.7\\"></circle><circle fill=\\"green\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"105.55555555555556\\" cy=\\"-122.63888888888887\\" r=\\"1.7\\"></circle><circle fill=\\"green\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"88.88888888888889\\" cy=\\"-124.99999999999999\\" r=\\"1.7\\"></circle><circle fill=\\"green\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"100\\" cy=\\"-129.7222222222222\\" r=\\"1.7\\"></circle><circle fill=\\"green\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"100\\" cy=\\"-117.91666666666664\\" r=\\"1.7\\"></circle><circle fill=\\"green\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"127.77777777777779\\" cy=\\"-124.99999999999999\\" r=\\"1.7\\"></circle><circle fill=\\"green\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"108.33333333333334\\" cy=\\"-122.63888888888887\\" r=\\"1.7\\"></circle><circle fill=\\"green\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"113.8888888888889\\" cy=\\"-120.27777777777776\\" r=\\"1.7\\"></circle><circle fill=\\"green\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"105.55555555555556\\" cy=\\"-127.36111111111109\\" r=\\"1.7\\"></circle><circle fill=\\"green\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"113.8888888888889\\" cy=\\"-129.7222222222222\\" r=\\"1.7\\"></circle><circle fill=\\"green\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"104.44444444444444\\" cy=\\"-120.27777777777776\\" r=\\"1.7\\"></circle><circle fill=\\"green\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"130.55555555555557\\" cy=\\"-122.63888888888887\\" r=\\"1.7\\"></circle><circle fill=\\"green\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"102.77777777777779\\" cy=\\"-127.36111111111109\\" r=\\"1.7\\"></circle><circle fill=\\"green\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"113.8888888888889\\" cy=\\"-117.91666666666664\\" r=\\"1.7\\"></circle><circle fill=\\"green\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"116.66666666666667\\" cy=\\"-124.99999999999999\\" r=\\"1.7\\"></circle><circle fill=\\"green\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"122.22222222222223\\" cy=\\"-122.63888888888887\\" r=\\"1.7\\"></circle><circle fill=\\"green\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"102.77777777777779\\" cy=\\"-120.27777777777776\\" r=\\"1.7\\"></circle><circle fill=\\"green\\" opacity=\\"0.35\\" stroke=\\"none\\" stroke-width=\\"1\\" cx=\\"98.8888888888889\\" cy=\\"-132.08333333333331\\" r=\\"1.7\\"></circle></svg><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"111.11111111111111\\" y=\\"3.9999999999999996\\" font-size=\\"9px\\" font-family=\\"sans-serif\\" text-anchor=\\"middle\\" alignment-baseline=\\"hanging\\" font-weight=\\"normal\\">200</text><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"138.88888888888889\\" y=\\"3.9999999999999996\\" font-size=\\"9px\\" font-family=\\"sans-serif\\" text-anchor=\\"middle\\" alignment-baseline=\\"hanging\\" font-weight=\\"normal\\">250</text><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"166.66666666666669\\" y=\\"3.9999999999999996\\" font-size=\\"9px\\" font-family=\\"sans-serif\\" text-anchor=\\"middle\\" alignment-baseline=\\"hanging\\" font-weight=\\"normal\\">300</text><text x=\\"133.33333333333334\\" y=\\"-179.16666666666663\\" alignment-baseline=\\"middle\\" text-anchor=\\"middle\\" stroke=\\"none\\" fill=\\"black\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" font-weight=\\"bold\\">Weight Distributions</text><text x=\\"133.33333333333334\\" y=\\"31.999999999999996\\" alignment-baseline=\\"baseline\\" text-anchor=\\"middle\\" stroke=\\"none\\" fill=\\"black\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" font-weight=\\"normal\\">weight (lbs)</text><path id=\\"yAxisPathId1\\" d=\\"M 48.77333333333334 -41.666666666666664 L 48.77333333333334 -166.66666666666663\\"></path><text alignment-baseline=\\"middle\\" text-anchor=\\"start\\" stroke=\\"none\\" fill=\\"black\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" font-weight=\\"normal\\">
            <textPath href=\\"#yAxisPathId1\\">
                
            </textPath>
          </text><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"80.93333333333334\\" y=\\"-41.66666666666666\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" text-anchor=\\"end\\" alignment-baseline=\\"middle\\" font-weight=\\"normal\\">football</text><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"80.93333333333334\\" y=\\"-83.33333333333331\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" text-anchor=\\"end\\" alignment-baseline=\\"middle\\" font-weight=\\"normal\\">basketball</text><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"80.93333333333334\\" y=\\"-124.99999999999999\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" text-anchor=\\"end\\" alignment-baseline=\\"middle\\" font-weight=\\"normal\\">LAX</text></svg></div>"
  `);
});
