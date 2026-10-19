---
title: "This is a thread on publications that study Machine Translation (mostly NMT)…"
date: 2019-03-22 19:01:53 +0300
lang: EN
excerpt: "…and subtitling. I am looking for studies that go beyond the word level and take the image into account. NMTsubtitling \"The models learn to distinguish between information from different segments & are surprisingly…"
source: x
x_id: "1109123038723952640"
---
{% raw %}
<p>This is a thread on publications that study Machine Translation (mostly #NMT) and #subtitling. I am looking for studies that go beyond the word level and take the image into account. <br>
#NMTsubtitling</p>
{% endraw %}

{% raw %}
<p>"The models learn to distinguish between information from different segments &amp; are surprisingly robust with respect to translation quality.  Interesting cross-sentential attention patterns that improve textual coherence in<br>
translation in selected cases". <a href="https://arxiv.org/pdf/1708.05943.pdf">https://arxiv.org/pdf/1708.05943.pdf</a></p>
{% endraw %}

{% raw %}
<p>Machine translation should not only produce semantically accurate translations, but should also consider pragmatic aspects, such as producing socially appropriate forms of address.&gt;&gt; <a href="http://www.aclweb.org/anthology/N16-1005">http://www.aclweb.org/anthology/N16-1005</a></p>
{% endraw %}

{% raw %}
<p>&gt;&gt;We currently assume that the desired level of politeness is specified by the user. Future work could aim to automatically predict it from the English<br>
source text based on textual features such as titles and names, or meta-textual information about the discourse participants.</p>
{% endraw %}

{% raw %}
<p>(Subtitle corpora are consistently used in MT research) "NMT is better for IT and Subtitles, SMT is better for Law, Medical, and Koran" -- "NMT models do not show robust behavior when confronted with conditions that differ significantly from training <a href="https://arxiv.org/pdf/1706.03872.pdf">https://arxiv.org/pdf/1706.03872.pdf</a></p>
{% endraw %}

{% raw %}
<p>(Another experiment with subtitles - laughing my heart out with this). "As turn taking is not clearly indicated, we treated consecutive sentences assuming they were uttered by different characters" <a href="https://arxiv.org/pdf/1506.05869.pdf">https://arxiv.org/pdf/1506.05869.pdf</a></p>
{% endraw %}

{% raw %}
<p>"For MT to tackle discourse phenomena, models must have access to extrasentential linguistic context. Models of context have been principally evaluated with standard automatic metrics, poorly adapted to evaluating discourse phenomena. <a href="https://arxiv.org/pdf/1711.00513.pdf">https://arxiv.org/pdf/1711.00513.pdf</a></p>
{% endraw %}

{% raw %}
<p>&gt;&gt;"Models are trained and tested on fan-produced parallel subtitles from OpenSubtitles2016" (so many researchers using it, nobody challenging its quality? Of course you'll get "; poor results for coreference and more promising<br>
results for coherence/cohesion"</p>
{% endraw %}

{% raw %}
<p>"Movie scripts span a wide range of topics and contain long dialogues with few participants, making them ideal for researching open domain, long<br>
interaction dialogue systems. They are close to human spoken language" <a href="https://www.researchgate.net/profile/Alessandro_Sordoni/publication/280221106_Hierarchical_Neural_Network_Generative_Models_for_Movie_Dialogues/links/55b80c5e08aed621de05bc13/Hierarchical-Neural-Network-Generative-Models-for-Movie-Dialogues.pdf">https://www.researchgate.net/profile/Alessandro_Sordoni/publication/280221106_Hierarchical_Neural_Network_Generative_Models_for_Movie_Dialogues/links/55b80c5e08aed621de05bc13/Hierarchical-Neural-Network-Generative-Models-for-Movie-Dialogues.pdf</a></p>
{% endraw %}

{% raw %}
<p>And here is "A Survey of Available Corpora for Building Data-Driven Dialogue Systems" with lots of movie subtitles and scripts. Very interesting! <a href="https://arxiv.org/pdf/1512.05742.pdf">https://arxiv.org/pdf/1512.05742.pdf</a></p>
{% endraw %}

{% raw %}
<p>The EU-funded #SUMAT project promised an "An Online Service<br>
for Subtitling by Machine Translation" which it never delivered (and nobody asked for EU money back?) We have research findings though, e.g.  <a href="https://www.tandfonline.com/doi/abs/10.1080/0907676X.2013.831920">https://www.tandfonline.com/doi/abs/10.1080/0907676X.2013.831920</a></p>
{% endraw %}

{% raw %}
<p>....which of course you have to pay to read! <a href="https://www.tandfonline.com/doi/full/10.1080/0907676X.2017.1291695?src=recsys">https://www.tandfonline.com/doi/full/10.1080/0907676X.2017.1291695?src=recsys</a></p>
{% endraw %}

{% raw %}
<p>So far, I haven't found any research taking visual nonverbal context into account. I'll keep looking.</p>
{% endraw %}

{% raw %}
<p>SMT model trained with fansubs: "Assessing the Post-Editing Effort for Automatic Translations of Subtitles". "Noise had to be cleaned such as: i) spelling errors, ii) nonuniform character casing..." (No translation errors cleaned)<br>
<a href="http://www.aclweb.org/anthology/R11-1014">http://www.aclweb.org/anthology/R11-1014</a></p>
{% endraw %}

{% raw %}
<p>Expecting to find answers to my initial question at the presentation titled "Video Analysis Applications and Use Cases in the Media Industry" by Tommaso Cesano @MetaliquidAI <a href="http://symposium.omniscien.com/day-1/">http://symposium.omniscien.com/day-1/</a></p>
{% endraw %}

{% raw %}
<p>Turns out they don't use it for linguistic purposes. Mainly for adding metadata to images and clips, face/brand recognition, highlight focus, segmentation, advertising purposes, etc</p>
{% endraw %}

{% raw %}
<p>However, @omniscientech is planning to use AI and video analysis. By enriching metadata, more context is provided, which in turn helps to improve MT, e.g. by disambiguating terms and phrases</p>
{% endraw %}

{% raw %}
<p>Long before NMT, one of the early attempts of MT in subtitling. Difficult to find MUSA project findings <a href="http://www.ilsp.gr/administrator/components/com_jresearch/files/publications/Infrastructure_for_a_multilingual_subtitle_generation_system-final.pdf">http://www.ilsp.gr/administrator/components/com_jresearch/files/publications/Infrastructure_for_a_multilingual_subtitle_generation_system-final.pdf</a></p>
{% endraw %}

{% raw %}
<p>No conclusions or any mention on the resulting translation quality. Even the architecture might be useless now <a href="http://www.ilsp.gr/administrator/components/com_jresearch/files/publications/LREC2004-Subtitling%20Resources.pdf">http://www.ilsp.gr/administrator/components/com_jresearch/files/publications/LREC2004-Subtitling%20Resources.pdf</a></p>
{% endraw %}

{% raw %}
<p>Yet another study (MA thesis) using the #OpenSubtitles dataset. When will the giant content owners let researchers use the more reliable professional subtitles? <a href="http://Opensubtitles.org">http://Opensubtitles.org</a> is mostly fansubs (lots of prof subs lately too)<br>
#NMT #subtitling <a href="https://slator.com/academia/nmt-for-subtitling-could-work-without-specialized-training-study-finds/">https://slator.com/academia/nmt-for-subtitling-could-work-without-specialized-training-study-finds/</a></p>
{% endraw %}

{% raw %}
<p>A new study on a #NMT and #subtitling, highlighting the importance of subtitling constraints and the need to to preserve utterance duration in subtitling corpora - By<br>
@karakanta et al<br>
<a href="http://ceur-ws.org/Vol-2481/paper38.pdf">http://ceur-ws.org/Vol-2481/paper38.pdf</a></p>
{% endraw %}

{% raw %}
<p>@karakanta This study shows that the corpus (TED talks) can be used to build models that efficiently segment sentences into #subtitles &amp; proposes a method for annotating existing subtitling corpora with subtitle breaks (with constraint of length)<br>
By @karakanta et al <br>
<a href="https://arxiv.org/abs/2002.10829">https://arxiv.org/abs/2002.10829</a></p>
{% endraw %}

{% raw %}
<p>A paper on Quality estimation for #subtitle translations <a href="https://arxiv.org/abs/2004.13828">https://arxiv.org/abs/2004.13828</a><br>
"A good translation retains all meaning and reads fluently; A bad one bears no resemblance to the meaning of the original and is disconnected from the context in the video; 1/2</p>
{% endraw %}

{% raw %}
<p>"A loose translation is one that uses paraphrasing, colloquialism, idiom, or contains some contextual information not available in [the] source text.” <br>
<a href="https://slator.com/machine-translation/good-bad-or-loose-amazons-new-subtitle-quality-estimation-system/">https://slator.com/machine-translation/good-bad-or-loose-amazons-new-subtitle-quality-estimation-system/</a> 2/2</p>
{% endraw %}

{% raw %}
<p>"Simplify-then-Translate: Automatic Preprocessing for Black-Box Machine Translation"<br>
A method that could be used in subtitling into low-resource languages <a href="https://arxiv.org/abs/2005.11197">https://arxiv.org/abs/2005.11197</a><br>
And an overview by Slator <a href="https://slator.com/machine-translation/how-netflix-researchers-simplify-subtitles-for-translation/">https://slator.com/machine-translation/how-netflix-researchers-simplify-subtitles-for-translation/</a></p>
{% endraw %}

{% raw %}
<p>Is there any MT research paper using <a href="http://OpenSubtitles.org">http://OpenSubtitles.org</a> that addresses its shortcomings? I know it's a conveniently aligned dataset but conclusions based on it need to be set on the right context (e.g. mix of fansubs and professional "stolen" subtitles). <br>
@karakanta?</p>
{% endraw %}

{% raw %}
<p>Lison at al (2016) describe how to use OpenSubtitles to extract large parallel corpora. No mention of how OpenSubtitles is composed, apart from a mention that part of it is OCR from video streams <a href="https://www.aclweb.org/anthology/L16-1147.pdf">https://www.aclweb.org/anthology/L16-1147.pdf</a></p>
{% endraw %}

{% raw %}
<p>Koponen et al (2020) mention that OpenSubtitles "comes mostly from volunteers". <br>
Interesting study but very limited scope: 12 professional subtitlers translating six 3min clips from European election debates &amp; semi-scripted lifestyle/cultural programmes<br>
<a href="https://eamt2020.inesc-id.pt/proceedings-eamt2020.pdf">https://eamt2020.inesc-id.pt/proceedings-eamt2020.pdf</a></p>
{% endraw %}

{% raw %}
<p>Another overview of Netflix's Automated Preprocessing (APP) model with examples in Hindi.<br>
"Human reference translations when back-translated to the original language is a rich source of simplifications (e.g. “jump in” is simplified to “take part”)"<br>
<a href="https://analyticsindiamag.com/netflix-ai-subtitles-transalation/">https://analyticsindiamag.com/netflix-ai-subtitles-transalation/</a></p>
{% endraw %}

{% raw %}
<p>A multilingual audiovisual corpus for #speechrecognition and #speechtotext translation providing 1200 hours of AV speech in 9 languages. Fully transcribed, the first and the largest open<br>
benchmark for multilingual AV speech recognition <a href="https://arxiv.org/abs/2303.00628">https://arxiv.org/abs/2303.00628</a></p>
{% endraw %}

{% raw %}
<p>Problems with automating translation of movie/TV show subtitles - related to:<br>
👉subtitle guidelines (KNPs, spacing, symbols, line breaks)<br>
 👉subtitle translation (condensing/paraphrasing, idioms, context, profanity, omissions) etc.<br>
<a href="https://arxiv.org/abs/1909.05362">https://arxiv.org/abs/1909.05362</a></p>
{% endraw %}
