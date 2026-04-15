
import os
import re

def update_quiz_data():
    base_path = r'C:\Users\hirok\.gemini\antigravity\scratch\social-studies-app'
    quiz_data_path = os.path.join(base_path, 'quiz_data.js')
    
    with open(quiz_data_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    updates = [
        ("1917年、レーニンの指導により", "assets/images/history/h_modern_5_russian_revolution.png"),
        ("1918年、米の値段が上がったことに", "assets/images/history/h_modern_5_rice_riots.png"),
        ("1923年9月1日に発生し、東京・横浜を中心に", "assets/images/history/h_modern_5_kanto_earthquake.png"),
        ("大正時代、民主主義を求める運動や風潮が", "assets/images/history/h_modern_5_taisho_democracy.png"),
        ("1945年8月6日と9日に、原子爆弾が投下された都市の", "assets/images/history/h_modern_7_hiroshima_nagasaki.png"),
        ("GHQの指令により、軍隊の解散や、戦争協力者の追放", "assets/images/history/h_contemporary_1_postwar_reform.png"),
        ("三井・三菱・安田・住友などの巨大企業グループを解体", "assets/images/history/h_contemporary_1_zaibatsu_dissolution.png"),
        ("地主が持っていた小作地を政府が買い上げ", "assets/images/history/h_contemporary_1_nongji_kaikaku.png"),
        ("アメリカを中心とする西側諸国と、ソ連を中心とする東側諸国が対立", "assets/images/history/h_contemporary_2_cold_war.png"),
        ("1950年、朝鮮半島の北と南が武力衝突", "assets/images/history/h_contemporary_2_korean_war.png"),
        ("1972年、アメリカから日本に返還された", "assets/images/history/h_contemporary_3_okinawa_reversion.png"),
        ("1973年、第四次中東戦争をきっかけに原油価格が高騰", "assets/images/history/h_contemporary_4_oil_shock.png"),
        ("2011年3月11日に発生し、巨大津波や福島第一原発事故", "assets/images/history/h_contemporary_5_higashi_nihon_daishinsai.png"),
    ]
    
    for marker, img_path in updates:
        # Find the question block that contains the marker text in the question field
        # We look for { ... "q": "...marker..." ... }
        # And specifically find the one that doesn't have an img yet
        
        # This matches the entire object from { to }
        pattern = r'\{[^{}]*?"q":\s*"[^"]*?' + re.escape(marker) + r'[^"]*?"[^{}]*?\}'
        
        def add_img(match):
            block = match.group(0)
            if '"img":' in block:
                return block 
            # Insert img before the last }
            return block[:-1] + '    "img": "' + img_path + '"\n        }'
            
        content = re.sub(pattern, add_img, content, flags=re.DOTALL)

    with open(quiz_data_path, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    update_quiz_data()
