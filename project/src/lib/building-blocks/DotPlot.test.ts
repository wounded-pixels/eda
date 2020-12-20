import { results } from './DotPlot.stories';

test('basic construction', () => {
  expect(results.basic.outerHTML).toMatchInlineSnapshot(`
    "<div style=\\"min-width: 200px; min-height: 100px; width: 300px; height: 150px; max-width: 400px; max-height: 200px; border: 1px solid black; resize: both; overflow: hidden;\\"><div></div><svg viewBox=\\"
            -35
            -115
            145
            139\\" preserveAspectRatio=\\"xMidYMid meet\\" style=\\"width: 100%; height: 100%; display: inline-block; overflow: hidden;\\"><svg viewBox=\\"
            0
            -100
            100 100\\" preserveAspectRatio=\\"xMidYMid meet\\" style=\\"width: 100%; height: 100%; display: inline-block; overflow: hidden;\\" x=\\"0\\" y=\\"-100\\" width=\\"100\\" height=\\"100\\"><rect x=\\"0\\" y=\\"-100\\" width=\\"100\\" height=\\"100\\" fill=\\"none\\"></rect><line fill=\\"grey\\" stroke=\\"lightgrey\\" stroke-width=\\"0.5\\" x1=\\"20\\" y1=\\"0\\" x2=\\"20\\" y2=\\"-100\\"></line><line fill=\\"grey\\" stroke=\\"lightgrey\\" stroke-width=\\"0.5\\" x1=\\"40\\" y1=\\"0\\" x2=\\"40\\" y2=\\"-100\\"></line><line fill=\\"grey\\" stroke=\\"lightgrey\\" stroke-width=\\"0.5\\" x1=\\"60\\" y1=\\"0\\" x2=\\"60\\" y2=\\"-100\\"></line><line fill=\\"grey\\" stroke=\\"lightgrey\\" stroke-width=\\"0.5\\" x1=\\"80\\" y1=\\"0\\" x2=\\"80\\" y2=\\"-100\\"></line><line x1=\\"0\\" y1=\\"0\\" x2=\\"100\\" y2=\\"0\\" stroke=\\"grey\\" stroke-width=\\"3\\"></line><line x1=\\"0\\" y1=\\"0\\" x2=\\"0\\" y2=\\"-100\\" stroke=\\"grey\\" stroke-width=\\"3\\"></line><line fill=\\"grey\\" stroke=\\"lightgrey\\" stroke-width=\\"0.5\\" x1=\\"0\\" y1=\\"-12.5\\" x2=\\"100\\" y2=\\"-12.5\\"></line><line fill=\\"grey\\" stroke=\\"lightgrey\\" stroke-width=\\"0.5\\" x1=\\"0\\" y1=\\"-25\\" x2=\\"100\\" y2=\\"-25\\"></line><line fill=\\"grey\\" stroke=\\"lightgrey\\" stroke-width=\\"0.5\\" x1=\\"0\\" y1=\\"-37.5\\" x2=\\"100\\" y2=\\"-37.5\\"></line><line fill=\\"grey\\" stroke=\\"lightgrey\\" stroke-width=\\"0.5\\" x1=\\"0\\" y1=\\"-50\\" x2=\\"100\\" y2=\\"-50\\"></line><line fill=\\"grey\\" stroke=\\"lightgrey\\" stroke-width=\\"0.5\\" x1=\\"0\\" y1=\\"-62.5\\" x2=\\"100\\" y2=\\"-62.5\\"></line><line fill=\\"grey\\" stroke=\\"lightgrey\\" stroke-width=\\"0.5\\" x1=\\"0\\" y1=\\"-75\\" x2=\\"100\\" y2=\\"-75\\"></line><line fill=\\"grey\\" stroke=\\"lightgrey\\" stroke-width=\\"0.5\\" x1=\\"0\\" y1=\\"-87.5\\" x2=\\"100\\" y2=\\"-87.5\\"></line><circle fill=\\"grey\\" opacity=\\"0.5\\" stroke=\\"grey\\" stroke-width=\\"1\\" cx=\\"50\\" cy=\\"-12.5\\" r=\\"4\\"></circle><circle fill=\\"grey\\" opacity=\\"0.5\\" stroke=\\"grey\\" stroke-width=\\"1\\" cx=\\"53\\" cy=\\"-25\\" r=\\"4\\"></circle><circle fill=\\"grey\\" opacity=\\"0.5\\" stroke=\\"grey\\" stroke-width=\\"1\\" cx=\\"62\\" cy=\\"-37.5\\" r=\\"4\\"></circle><circle fill=\\"grey\\" opacity=\\"0.5\\" stroke=\\"grey\\" stroke-width=\\"1\\" cx=\\"64\\" cy=\\"-50\\" r=\\"4\\"></circle><circle fill=\\"grey\\" opacity=\\"0.5\\" stroke=\\"grey\\" stroke-width=\\"1\\" cx=\\"66\\" cy=\\"-62.5\\" r=\\"4\\"></circle><circle fill=\\"grey\\" opacity=\\"0.5\\" stroke=\\"grey\\" stroke-width=\\"1\\" cx=\\"70\\" cy=\\"-75\\" r=\\"4\\"></circle><circle fill=\\"grey\\" opacity=\\"0.5\\" stroke=\\"grey\\" stroke-width=\\"1\\" cx=\\"75\\" cy=\\"-87.5\\" r=\\"4\\"></circle></svg><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"20\\" y=\\"2.4000000000000004\\" font-size=\\"9px\\" font-family=\\"sans-serif\\" text-anchor=\\"middle\\" alignment-baseline=\\"hanging\\" font-weight=\\"normal\\">20</text><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"40\\" y=\\"2.4000000000000004\\" font-size=\\"9px\\" font-family=\\"sans-serif\\" text-anchor=\\"middle\\" alignment-baseline=\\"hanging\\" font-weight=\\"normal\\">40</text><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"60\\" y=\\"2.4000000000000004\\" font-size=\\"9px\\" font-family=\\"sans-serif\\" text-anchor=\\"middle\\" alignment-baseline=\\"hanging\\" font-weight=\\"normal\\">60</text><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"80\\" y=\\"2.4000000000000004\\" font-size=\\"9px\\" font-family=\\"sans-serif\\" text-anchor=\\"middle\\" alignment-baseline=\\"hanging\\" font-weight=\\"normal\\">80</text><text x=\\"50\\" y=\\"-107.5\\" alignment-baseline=\\"middle\\" text-anchor=\\"middle\\" stroke=\\"none\\" fill=\\"black\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" font-weight=\\"bold\\"></text><text x=\\"50\\" y=\\"19.200000000000003\\" alignment-baseline=\\"baseline\\" text-anchor=\\"middle\\" stroke=\\"none\\" fill=\\"black\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" font-weight=\\"normal\\"></text><path id=\\"yAxisPathId0\\" d=\\"M -25.2 -25 L -25.2 -100\\"></path><text alignment-baseline=\\"middle\\" text-anchor=\\"start\\" stroke=\\"none\\" fill=\\"black\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" font-weight=\\"normal\\">
            <textPath href=\\"#yAxisPathId0\\">
                
            </textPath>
          </text><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"-1.75\\" y=\\"-12.5\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" text-anchor=\\"end\\" alignment-baseline=\\"middle\\" font-weight=\\"normal\\">Wilma</text><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"-1.75\\" y=\\"-25\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" text-anchor=\\"end\\" alignment-baseline=\\"middle\\" font-weight=\\"normal\\">Betty</text><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"-1.75\\" y=\\"-37.5\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" text-anchor=\\"end\\" alignment-baseline=\\"middle\\" font-weight=\\"normal\\">Alice</text><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"-1.75\\" y=\\"-50\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" text-anchor=\\"end\\" alignment-baseline=\\"middle\\" font-weight=\\"normal\\">Fred</text><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"-1.75\\" y=\\"-62.5\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" text-anchor=\\"end\\" alignment-baseline=\\"middle\\" font-weight=\\"normal\\">Tina</text><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"-1.75\\" y=\\"-75\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" text-anchor=\\"end\\" alignment-baseline=\\"middle\\" font-weight=\\"normal\\">Barney</text><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"-1.75\\" y=\\"-87.5\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" text-anchor=\\"end\\" alignment-baseline=\\"middle\\" font-weight=\\"normal\\">Ted</text></svg><div style=\\"position: absolute; padding: 7px; border-radius: 5px; display: none;\\"></div></div>"
  `);
});

test('zoomed', () => {
  expect(results.zoomed.outerHTML).toMatchInlineSnapshot(`
    "<div style=\\"min-width: 100px; min-height: 200px; width: 150px; height: 300px; max-width: 200px; max-height: 400px; border: 1px solid black; resize: both; overflow: hidden;\\"><div></div><svg viewBox=\\"
            60
            -230
            150
            278\\" preserveAspectRatio=\\"xMidYMid meet\\" style=\\"width: 100%; height: 100%; display: inline-block; overflow: hidden;\\"><svg viewBox=\\"
            100
            -200
            100 200\\" preserveAspectRatio=\\"xMidYMid meet\\" style=\\"width: 100%; height: 100%; display: inline-block; overflow: hidden;\\" x=\\"100\\" y=\\"-200\\" width=\\"100\\" height=\\"200\\"><rect x=\\"100\\" y=\\"-200\\" width=\\"100\\" height=\\"200\\" fill=\\"lightgrey\\"></rect><line fill=\\"grey\\" stroke=\\"white\\" stroke-width=\\"1\\" x1=\\"125\\" y1=\\"0\\" x2=\\"125\\" y2=\\"-200\\"></line><line fill=\\"grey\\" stroke=\\"white\\" stroke-width=\\"1\\" x1=\\"150\\" y1=\\"0\\" x2=\\"150\\" y2=\\"-200\\"></line><line fill=\\"grey\\" stroke=\\"white\\" stroke-width=\\"1\\" x1=\\"175\\" y1=\\"0\\" x2=\\"175\\" y2=\\"-200\\"></line><line x1=\\"100\\" y1=\\"0\\" x2=\\"200\\" y2=\\"0\\" stroke=\\"none\\" stroke-width=\\"3\\"></line><line x1=\\"100\\" y1=\\"0\\" x2=\\"100\\" y2=\\"-200\\" stroke=\\"none\\" stroke-width=\\"3\\"></line><line fill=\\"grey\\" stroke=\\"white\\" stroke-width=\\"1\\" x1=\\"100\\" y1=\\"-25\\" x2=\\"200\\" y2=\\"-25\\"></line><line fill=\\"grey\\" stroke=\\"white\\" stroke-width=\\"1\\" x1=\\"100\\" y1=\\"-50\\" x2=\\"200\\" y2=\\"-50\\"></line><line fill=\\"grey\\" stroke=\\"white\\" stroke-width=\\"1\\" x1=\\"100\\" y1=\\"-75\\" x2=\\"200\\" y2=\\"-75\\"></line><line fill=\\"grey\\" stroke=\\"white\\" stroke-width=\\"1\\" x1=\\"100\\" y1=\\"-100\\" x2=\\"200\\" y2=\\"-100\\"></line><line fill=\\"grey\\" stroke=\\"white\\" stroke-width=\\"1\\" x1=\\"100\\" y1=\\"-125\\" x2=\\"200\\" y2=\\"-125\\"></line><line fill=\\"grey\\" stroke=\\"white\\" stroke-width=\\"1\\" x1=\\"100\\" y1=\\"-150\\" x2=\\"200\\" y2=\\"-150\\"></line><line fill=\\"grey\\" stroke=\\"white\\" stroke-width=\\"1\\" x1=\\"100\\" y1=\\"-175\\" x2=\\"200\\" y2=\\"-175\\"></line><circle fill=\\"orange\\" opacity=\\"0.5\\" stroke=\\"grey\\" stroke-width=\\"1\\" cx=\\"125\\" cy=\\"-25\\" r=\\"5\\"></circle><circle fill=\\"orange\\" opacity=\\"0.5\\" stroke=\\"grey\\" stroke-width=\\"1\\" cx=\\"132.5\\" cy=\\"-50\\" r=\\"5\\"></circle><circle fill=\\"orange\\" opacity=\\"0.5\\" stroke=\\"grey\\" stroke-width=\\"1\\" cx=\\"155\\" cy=\\"-75\\" r=\\"5\\"></circle><circle fill=\\"blue\\" opacity=\\"0.5\\" stroke=\\"grey\\" stroke-width=\\"1\\" cx=\\"160\\" cy=\\"-100\\" r=\\"5\\"></circle><circle fill=\\"orange\\" opacity=\\"0.5\\" stroke=\\"grey\\" stroke-width=\\"1\\" cx=\\"165\\" cy=\\"-125\\" r=\\"5\\"></circle><circle fill=\\"blue\\" opacity=\\"0.5\\" stroke=\\"grey\\" stroke-width=\\"1\\" cx=\\"175\\" cy=\\"-150\\" r=\\"5\\"></circle><circle fill=\\"blue\\" opacity=\\"0.5\\" stroke=\\"grey\\" stroke-width=\\"1\\" cx=\\"187.5\\" cy=\\"-175\\" r=\\"5\\"></circle></svg><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"125\\" y=\\"4.800000000000001\\" font-size=\\"9px\\" font-family=\\"sans-serif\\" text-anchor=\\"middle\\" alignment-baseline=\\"hanging\\" font-weight=\\"normal\\">50</text><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"150\\" y=\\"4.800000000000001\\" font-size=\\"9px\\" font-family=\\"sans-serif\\" text-anchor=\\"middle\\" alignment-baseline=\\"hanging\\" font-weight=\\"normal\\">60</text><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"175\\" y=\\"4.800000000000001\\" font-size=\\"9px\\" font-family=\\"sans-serif\\" text-anchor=\\"middle\\" alignment-baseline=\\"hanging\\" font-weight=\\"normal\\">70</text><text x=\\"150\\" y=\\"-215\\" alignment-baseline=\\"middle\\" text-anchor=\\"middle\\" stroke=\\"none\\" fill=\\"black\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" font-weight=\\"bold\\">Heights</text><text x=\\"150\\" y=\\"38.400000000000006\\" alignment-baseline=\\"baseline\\" text-anchor=\\"middle\\" stroke=\\"none\\" fill=\\"black\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" font-weight=\\"normal\\">height (inches)</text><path id=\\"yAxisPathId1\\" d=\\"M 71.2 -50 L 71.2 -200\\"></path><text alignment-baseline=\\"middle\\" text-anchor=\\"start\\" stroke=\\"none\\" fill=\\"black\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" font-weight=\\"normal\\">
            <textPath href=\\"#yAxisPathId1\\">
                
            </textPath>
          </text><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"98\\" y=\\"-25\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" text-anchor=\\"end\\" alignment-baseline=\\"middle\\" font-weight=\\"normal\\">Wilma</text><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"98\\" y=\\"-50\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" text-anchor=\\"end\\" alignment-baseline=\\"middle\\" font-weight=\\"normal\\">Betty</text><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"98\\" y=\\"-75\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" text-anchor=\\"end\\" alignment-baseline=\\"middle\\" font-weight=\\"normal\\">Alice</text><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"98\\" y=\\"-100\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" text-anchor=\\"end\\" alignment-baseline=\\"middle\\" font-weight=\\"normal\\">Fred</text><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"98\\" y=\\"-125\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" text-anchor=\\"end\\" alignment-baseline=\\"middle\\" font-weight=\\"normal\\">Tina</text><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"98\\" y=\\"-150\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" text-anchor=\\"end\\" alignment-baseline=\\"middle\\" font-weight=\\"normal\\">Barney</text><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"98\\" y=\\"-175\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" text-anchor=\\"end\\" alignment-baseline=\\"middle\\" font-weight=\\"normal\\">Ted</text></svg></div>"
  `);
});

test('changes', () => {
  expect(results.changes.outerHTML).toMatchInlineSnapshot(`
    "<div style=\\"min-width: 100px; min-height: 100px; width: 150px; height: 150px; max-width: 200px; max-height: 200px; border: 1px solid black; resize: both; overflow: hidden;\\"><div></div><svg viewBox=\\"
            -35
            -115
            145
            139\\" preserveAspectRatio=\\"xMidYMid meet\\" style=\\"width: 100%; height: 100%; display: inline-block; overflow: hidden;\\"><svg viewBox=\\"
            0
            -100
            100 100\\" preserveAspectRatio=\\"xMidYMid meet\\" style=\\"width: 100%; height: 100%; display: inline-block; overflow: hidden;\\" x=\\"0\\" y=\\"-100\\" width=\\"100\\" height=\\"100\\"><rect x=\\"0\\" y=\\"-100\\" width=\\"100\\" height=\\"100\\" fill=\\"none\\"></rect><line fill=\\"grey\\" stroke=\\"lightgrey\\" stroke-width=\\"0.5\\" x1=\\"20\\" y1=\\"0\\" x2=\\"20\\" y2=\\"-100\\"></line><line fill=\\"grey\\" stroke=\\"lightgrey\\" stroke-width=\\"0.5\\" x1=\\"40\\" y1=\\"0\\" x2=\\"40\\" y2=\\"-100\\"></line><line fill=\\"grey\\" stroke=\\"lightgrey\\" stroke-width=\\"0.5\\" x1=\\"60\\" y1=\\"0\\" x2=\\"60\\" y2=\\"-100\\"></line><line fill=\\"grey\\" stroke=\\"lightgrey\\" stroke-width=\\"0.5\\" x1=\\"80\\" y1=\\"0\\" x2=\\"80\\" y2=\\"-100\\"></line><line x1=\\"0\\" y1=\\"0\\" x2=\\"100\\" y2=\\"0\\" stroke=\\"grey\\" stroke-width=\\"3\\"></line><line x1=\\"0\\" y1=\\"0\\" x2=\\"0\\" y2=\\"-100\\" stroke=\\"grey\\" stroke-width=\\"3\\"></line><line fill=\\"grey\\" stroke=\\"lightgrey\\" stroke-width=\\"0.5\\" x1=\\"0\\" y1=\\"-25\\" x2=\\"100\\" y2=\\"-25\\"></line><line fill=\\"grey\\" stroke=\\"lightgrey\\" stroke-width=\\"0.5\\" x1=\\"0\\" y1=\\"-12.5\\" x2=\\"100\\" y2=\\"-12.5\\"></line><line fill=\\"grey\\" stroke=\\"lightgrey\\" stroke-width=\\"0.5\\" x1=\\"0\\" y1=\\"-37.5\\" x2=\\"100\\" y2=\\"-37.5\\"></line><line fill=\\"grey\\" stroke=\\"lightgrey\\" stroke-width=\\"0.5\\" x1=\\"0\\" y1=\\"-50\\" x2=\\"100\\" y2=\\"-50\\"></line><line fill=\\"grey\\" stroke=\\"lightgrey\\" stroke-width=\\"0.5\\" x1=\\"0\\" y1=\\"-62.5\\" x2=\\"100\\" y2=\\"-62.5\\"></line><line fill=\\"grey\\" stroke=\\"lightgrey\\" stroke-width=\\"0.5\\" x1=\\"0\\" y1=\\"-75\\" x2=\\"100\\" y2=\\"-75\\"></line><line fill=\\"grey\\" stroke=\\"lightgrey\\" stroke-width=\\"0.5\\" x1=\\"0\\" y1=\\"-87.5\\" x2=\\"100\\" y2=\\"-87.5\\"></line><circle fill=\\"grey\\" opacity=\\"0.5\\" stroke=\\"grey\\" stroke-width=\\"1\\" cx=\\"55\\" cy=\\"-25\\" r=\\"4\\"></circle><circle fill=\\"grey\\" opacity=\\"0.5\\" stroke=\\"grey\\" stroke-width=\\"1\\" cx=\\"53\\" cy=\\"-12.5\\" r=\\"4\\"></circle><circle fill=\\"grey\\" opacity=\\"0.5\\" stroke=\\"grey\\" stroke-width=\\"1\\" cx=\\"62\\" cy=\\"-37.5\\" r=\\"4\\"></circle><circle fill=\\"grey\\" opacity=\\"0.5\\" stroke=\\"grey\\" stroke-width=\\"1\\" cx=\\"64\\" cy=\\"-50\\" r=\\"4\\"></circle><circle fill=\\"grey\\" opacity=\\"0.5\\" stroke=\\"grey\\" stroke-width=\\"1\\" cx=\\"66\\" cy=\\"-62.5\\" r=\\"4\\"></circle><circle fill=\\"grey\\" opacity=\\"0.5\\" stroke=\\"grey\\" stroke-width=\\"1\\" cx=\\"70\\" cy=\\"-75\\" r=\\"4\\"></circle><circle fill=\\"grey\\" opacity=\\"0.5\\" stroke=\\"grey\\" stroke-width=\\"1\\" cx=\\"75\\" cy=\\"-87.5\\" r=\\"4\\"></circle></svg><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"20\\" y=\\"2.4000000000000004\\" font-size=\\"9px\\" font-family=\\"sans-serif\\" text-anchor=\\"middle\\" alignment-baseline=\\"hanging\\" font-weight=\\"normal\\">20</text><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"40\\" y=\\"2.4000000000000004\\" font-size=\\"9px\\" font-family=\\"sans-serif\\" text-anchor=\\"middle\\" alignment-baseline=\\"hanging\\" font-weight=\\"normal\\">40</text><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"60\\" y=\\"2.4000000000000004\\" font-size=\\"9px\\" font-family=\\"sans-serif\\" text-anchor=\\"middle\\" alignment-baseline=\\"hanging\\" font-weight=\\"normal\\">60</text><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"80\\" y=\\"2.4000000000000004\\" font-size=\\"9px\\" font-family=\\"sans-serif\\" text-anchor=\\"middle\\" alignment-baseline=\\"hanging\\" font-weight=\\"normal\\">80</text><text x=\\"50\\" y=\\"-107.5\\" alignment-baseline=\\"middle\\" text-anchor=\\"middle\\" stroke=\\"none\\" fill=\\"black\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" font-weight=\\"bold\\"></text><text x=\\"50\\" y=\\"19.200000000000003\\" alignment-baseline=\\"baseline\\" text-anchor=\\"middle\\" stroke=\\"none\\" fill=\\"black\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" font-weight=\\"normal\\"></text><path id=\\"yAxisPathId2\\" d=\\"M -25.2 -25 L -25.2 -100\\"></path><text alignment-baseline=\\"middle\\" text-anchor=\\"start\\" stroke=\\"none\\" fill=\\"black\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" font-weight=\\"normal\\">
            <textPath href=\\"#yAxisPathId2\\">
                
            </textPath>
          </text><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"-1.75\\" y=\\"-25\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" text-anchor=\\"end\\" alignment-baseline=\\"middle\\" font-weight=\\"normal\\">Wilma</text><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"-1.75\\" y=\\"-12.5\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" text-anchor=\\"end\\" alignment-baseline=\\"middle\\" font-weight=\\"normal\\">Betty</text><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"-1.75\\" y=\\"-37.5\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" text-anchor=\\"end\\" alignment-baseline=\\"middle\\" font-weight=\\"normal\\">Alice</text><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"-1.75\\" y=\\"-50\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" text-anchor=\\"end\\" alignment-baseline=\\"middle\\" font-weight=\\"normal\\">Fred</text><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"-1.75\\" y=\\"-62.5\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" text-anchor=\\"end\\" alignment-baseline=\\"middle\\" font-weight=\\"normal\\">Tina</text><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"-1.75\\" y=\\"-75\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" text-anchor=\\"end\\" alignment-baseline=\\"middle\\" font-weight=\\"normal\\">Barney</text><text fill=\\"black\\" stroke=\\"none\\" stroke-width=\\"1\\" x=\\"-1.75\\" y=\\"-87.5\\" font-size=\\"10px\\" font-family=\\"sans-serif\\" text-anchor=\\"end\\" alignment-baseline=\\"middle\\" font-weight=\\"normal\\">Ted</text></svg></div>"
  `);
});
