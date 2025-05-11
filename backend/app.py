import pandas as pd
import streamlit as st
from sklearn.preprocessing import OneHotEncoder
from sklearn.neighbors import NearestNeighbors

# تحميل البيانات
df = pd.read_csv("عمال_وحرفيين_بفئة_التكلفة_محدث.csv", encoding="utf-8-sig")

# ترميز البيانات
features = df[["الحرفة", "فئة_التكلفة", "الموقع"]]
encoder = OneHotEncoder()
encoded_features = encoder.fit_transform(features)

# تدريب النموذج
knn = NearestNeighbors(n_neighbors=5, metric="cosine")
knn.fit(encoded_features)

# واجهة Streamlit
st.title("نظام ترشيح العمال")

# اختيار المدخلات من المستخدم
الحرفة = st.selectbox("اختر الحرفة المطلوبة", df["الحرفة"].unique())
الفئة = st.selectbox("اختر فئة التكلفة", df["فئة_التكلفة"].unique())
الموقع = st.selectbox("اختر الموقع", df["الموقع"].unique())
عدد = st.slider("عدد العمال المقترحين", 1, 10, 5)

# زر التوصية
if st.button("اعرض الترشيحات"):
    input_df = pd.DataFrame([[الحرفة, الفئة, الموقع]], columns=["الحرفة", "فئة_التكلفة", "الموقع"])
    input_encoded = encoder.transform(input_df)
    distances, indices = knn.kneighbors(input_encoded, n_neighbors=عدد)
    نتائج = df.iloc[indices[0]]
    st.subheader("العمال المقترحين:")
    st.write(نتائج)
